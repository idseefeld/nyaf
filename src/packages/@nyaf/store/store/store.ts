import { Observer, uuidv4, isFunction, BaseComponent } from '@nyaf/lib';
import { StoreParams, ActionKey } from './store.params';

/**
 * The current state of the store during a store operation.
 */
export enum StoreState {
  /**
   * An action is being dispatched.
   */
  Action,
  /**
   * Regular state, waiting for action.
   */
  Resting,
  /**
   * Object mutates, but not yet finished.
   */
  Mutation
}

/**
 * The store class. You can have multiple stores, even if merged to simplify access different instances exist.
 * The store receives dispatch calls to mutate the store. Each property is handled separately.
 * If one changes through a reducer, the subscriber event fires. This returns the whole store, but only
 * the **one** property you currently subscribe to has it's new value already; all others remain until they receive their values.
 * That happens even if the reducer returns multiple values in one single step. To assure a fully mutated object
 */
export class Store<ST extends object = any> {
  private _actions: Map<ActionKey, any>;
  private _reducer: Map<ActionKey, (state: any, payload: any, actionKey?: ActionKey) => Promise<any> | any>;
  private _subscribers: Map<BaseComponent, Map<string, { remove: () => void; }>> = new Map();
  private _status: Map<ActionKey, StoreState> = new Map();
  private _state: ProxyConstructor;
  private _observer: Observer;
  private _id: string;

  constructor(params: StoreParams<ST>) {
    this._id = uuidv4();
    this._observer = Observer.getInstance();
    // Look in the passed params object for actions and reducer
    // that might have been passed in
    if (params.hasOwnProperty('actions') && params.actions) {
      const keys: [ActionKey, any][] = Object.entries(params.actions);
      const symbolKeys: [ActionKey, any][] = Object.getOwnPropertySymbols(params.actions).map(s => [s, params.actions[s as any]]);
      this._actions = new Map(keys);
      symbolKeys.forEach(sk => this._actions.set(sk[0], sk[1]));
    } else {
      this._actions = new Map<string, any>();
    }

    if (params.hasOwnProperty('reducer') && params.reducer) {
      this._reducer = new Map(Object.entries(params.reducer));
      const symbolKeys: [ActionKey, any][] = Object.getOwnPropertySymbols(params.actions).map(s => [s, params.actions[s as any]]);
      symbolKeys.forEach(sk => this._reducer.set(sk[0], sk[1]));
    } else {
      this._reducer = new Map<string, (state: any, payload: any) => void>();
    }

    this.createStoreState<ST>(params);
    // A status enum to set during actions and reducer
    this._actions.forEach(async (val, key) => {
      this._status.set(key, StoreState.Resting);
    });

  }

  private createStoreState<S>(params: StoreParams<S>) {
    // Set our state to be a Proxy. We are setting the default state by
    // checking the params and defaulting to an empty object if no default
    // state is passed in
    this._state = new Proxy(params.state || {}, {
      set: (state: any, storeProperty: string, value: any) => {
        // Set the value as we would normally
        state[storeProperty] = value;
        // Publish the change event for the components that are listening
        this._observer.publish(storeProperty, this._state);
        return true;
      }
    });
  }

  /**
   * A dispatcher for actions that looks in the actions
   * collection and runs the action if it can find it
   *
   * @param {ActionKey} actionKey The key to initiate the action, must have a corresponding entry in the reducer object
   * @param {any} payload An optional payload that provides data for the action
   * @returns {boolean} Returns true for success or false if the action could not dispatch properly (see warnings)
   * @memberof Store {@link Store}
   */
  async dispatch(actionKey: ActionKey, payload?: any): Promise<boolean> {
    // Run a quick check to see if the action actually exists
    // before we try to run it
    if (this.actions.has(actionKey) === false) {
      console.warn(`Action "${String(actionKey)}" doesn't exist.`);
      return false;
    }
    // Let anything that's watching the status know that we're dispatching an action
    this._status.set(actionKey, StoreState.Action);
    let value = payload;
    if (value === undefined) {
      // Actually call the action and pass it if no payload provided (default fallback)
      value = this.actions.get(actionKey)();
    }
    // forward the actions value as initial value to the reducer
    // Run a quick check to see if this mutation actually exists
    // before trying to run it
    if (this.reducer.has(actionKey) === false) {
      console.warn(`Reducer "${String(actionKey)}" doesn't exist.`);
      return false;
    }
    // Let anything that's watching the status know that we're mutating state
    this._status.set(actionKey, StoreState.Mutation);
    // Get a new version of the state by running the mutation
    const state = await this.reducer.get(actionKey)(this._state, value, actionKey);
    // merge states; this is tricky. The assign will fire the subscribers one by one, so if the first get it's call, the other values are
    // not yet set, and if we pull data from store.state it's plain wrong
    Object.assign(this._state, state);
    this._status.set(actionKey, StoreState.Resting);
    this._observer.publish('__dispatched__', this._state);
    return true;
  }

  /**
   * The final event that shows that all mutations of a reducer call are done. Returns the fully mutated store.
   * @param cb A callback function to receive the complete store.
   */
  dispatched(cb: (value: ST) => void): void {
    this._observer.subscribe('__dispatched__', cb);
  }

  /**
   * Subscribe here for store changes. Don't forget to call `remove` on dispose. The subscriber must be destroyed if the defining component is disposed or removed from DOM.
   * To do so, capture the returned object. It contains a function `remove()` you can call, then.
   *
   * @param storeProperty Subscribe to any property of the store defined by store type and only in string form.
   * @param cb The callback that will be called when a change happened. Parameter is the current state object. The callback may not return anything.
   * */
  subscribe(storeProperty: keyof ST & string, cb: (value: ST) => void, cp?: BaseComponent): { remove: () => void; } {
    const subscription = this._observer.subscribe(storeProperty, cb);
    if (!this._subscribers.get(cp)) {
      this._subscribers.set(cp, new Map());
    }
    const setOfSubscribers = this._subscribers.get(cp);
    setOfSubscribers.set(storeProperty, subscription);
    this._subscribers.set(cp, setOfSubscribers);
    const that = this;
    return {
      remove: () => {
        // observer
        that._subscribers.get(cp).get(storeProperty).remove();
        // subscriber
        that._subscribers.get(cp).delete(storeProperty);
        const setOfSubscribers = this._subscribers.get(cp);
      }
    };
  }

  /**
   * Remove (dispose) all the subscribers for all store states.
   * @param specific A state property, for which you wish to dispose all the subscribers. Can be ommited.
   */
  dispose(specific: keyof ST & string, cp: BaseComponent) {
    if (specific) {
      [...this._subscribers.keys()]
        .filter(s => s === cp)
        .forEach(s => this._subscribers.get(s).forEach((a: any) => a.remove()));
    } else {
      this._subscribers.forEach(s => s.forEach(a => a.remove()));
      this._subscribers = new Map();
    }
  }

  /**
   * Merge this store with another one. This is useful to have distributed definitions, sub-stores per component actually,
   * but can still work with one single global store - the single source of truth.
   *
   * @param store Another stores definitions.
   */
  mergeStore<T>(store: StoreParams<T>): Store<ST & T> {
    for (const action of Object.entries(store.actions)) {
      const [key, payload] = action;
      if (this._actions.get(key)) {
        throw new Error(`Action ${key} already exists`);
      }
      this._actions.set(key, payload);
    }
    for (const reducer of Object.entries(store.reducer)) {
      const [key, func] = reducer;
      if (this._reducer.get(key)) {
        throw new Error(`Reducer for action ${key} already exists`);
      }
      this._reducer.set(key, func);
    }
    this.createStoreState<T>(store);
    return this as Store<any>;
  }

  /**
   * The state of the store. If not in a dispatch call, its usually Resting. {@link StoreState}.
   */
  get status(): Map<ActionKey, StoreState> {
    return this._status;
  }

  /**
   * The known actions. Dispatching a missing action results in an exception.
   */
  get actions(): Map<ActionKey, any> {
    return this._actions;
  }

  /**
   * The registered reducers with the action names as keys.
   */
  get reducer(): Map<ActionKey, (state: any, payload: any, actionKey?: ActionKey) => Promise<any> | any> {
    return this._reducer;
  }

  /**
   * The stores internal Id. Useful for debugging and referencing.
   */
  get id(): string {
    return this._id;
  }

  /**
   * The current store data. If pulled in a change subscription be aware that multiple mutations may follow and the state is not yet completed.
   */
  get state(): any {
    return this._state;
  }

}
