﻿import { ModelBinder } from '../modelbinder/modelbinder.class';
import { IBindingHandler } from '../modelbinder/handlers/ibindinghandler.interface';
import { BaseComponent, Type } from '@nyaf/lib';

/**
 * This type allows various settings for the view. It's optional and all members are optional.
 * A standard view with the view model being build by own code and properties are instantiated, it's usually not required. However, if the model
 * is generated by a tool, such as NSwag, and the initialization steps are not part of the default ctor call, the viewmodel must be "enhanced".
 * There are two options:
 * 1. If the viewmodel has a constructor that requires parameters, use the @param ctor to deliver the parameters.
 * 2. If the viewmodel has an initialization function ofr nothing at all, use @param factory to create a factory. You get the current object and apply your changes.
 *
 * The thirs option is regarding handlers. Handlers define, which property is bound in which way. In case you need a special treatment for Date values,
 * create a Handler through implementing the @see IBindingHandler interface. It has two features: Listen for events and change value if the bound object changes.
 * You can skip the listener part to have an unidirectional binding. Internally there are three pre-defined handlers:
 *
 * 1. innerText: An unidirectional binder that writes text in any @see HTMLElement
 * 2. value: A binder that handles any kind of @see IHTMLInputElement ; this is bi-directional
 * 3. checkbox: Handles a value by accepting a `boolean` value and supports the `checked` property instead of `value`.
 *
 * @typeParam T The view model
 *
 */
export interface IViewDecoratorOptions<T> {
  /**
   * An optional object used to create an instance. This overrides the view model's default constructor.
   */
  ctor?: Partial<T>;
  /**
   * An optional list of handlers, that handle custom binding operations. Assign the name used in `n-bind` and an instance of the binder class.
   *
   * ```typescript
   * @ViewModel<Model>(Model, { handler: { 'special': new SpecialBinder() }})
   * ```
   * In this scenario, the class *SpecialBinder* must implement @see IBindingHandler.
   * Any bindings that apply to 'special' are now being re-routed through this custom binder code (exclusively, bypassing the default binders).
   */
  handler?: { [property: string]: IBindingHandler };
  /**
   * If the @see ctor option is not flexible enough and you need a very constructed object, this is the right way to setup.
   *
   * In the following example the factory sets just one property to a distinct value (a pre-fill).
   *
   * ```typescript
   * @CustomElement('app-forms-demo')
   * @ViewModel(ContactModel, {
   *   factory: m => m.email = 'bla@fasel.com',
   *   handler: { 'value': new ValueBindingHandler() }
   * })
   * export class FormsDemoComponent<T extends ContactModel> extends BaseComponent implements IModel<ContactModel> {
   *
   *   model: ModelBinder<ContactModel>;
   *
   *   // omitted for brevity
   * }
   * ```
   *
   * If you access the model (without any further code required) like this: `this.model.scope.email` the value is already filled in.
   * An even more complex setup is possible providing a definition like this:
   *
   * ```typescript
   *  factory: (m: ContactModel) => {
   *    m.email = 'bla@fasel.com';
   *    m.name = 'Test Name';
   *  }
   * ```
   * @param model Placeholder for the model type
   * @typeParam T The view model type
   *
   */
  factory?: (model: T) => void;
}

/**
 * The ViewModel decorator. Defines the `model` value in the component. Goes together with the @see IModel interface.
 *
 * This decorator defines the model for a component. It's a class decorator.
 *
 * For more information see @see IViewDecoratorOptions
 *
 *
 * @param model The model used to bind the component. It's one model per component.
 * @param options An optional set of handlers that handle custom data types while transferring values from elements to model and vice versa. Also option constructor support.
 */
export function ViewModel<T extends {}>(model: Type<T>, options?: IViewDecoratorOptions<T>) {

  function viewModelInternal(target: Object): void {
    viewModelInternalSetup<T>(target, model, options);
  }

  // return the decorator
  return viewModelInternal;
}

/**
 * @ignore
 */
function viewModelInternalSetup<T extends {}>(target: any, modelType: Type<T>, options?: IViewDecoratorOptions<T>) {
  // create a helper property to transport a meta data value
  // this is an implicit property not available from user code, it's just to support the forms services
  // the value is the constructor
  Object.defineProperty(target, `__model__`, {
    value: modelType,
    enumerable: false,
    configurable: false
  });
  if (options?.ctor) {
    Object.defineProperty(target, `__model__ctor__`, {
      value: options.ctor,
      enumerable: false,
      configurable: false
    });
  }
  if (options?.factory) {
    Object.defineProperty(target, `__model__factory__`, {
      value: options.factory,
      enumerable: false,
      configurable: false
    });
  }
  const targetPrototype = target.prototype;
  if (!targetPrototype) {
    throw new Error('Decorator must be run on an instanciable component.');
  }
  // the base component has a setup procedure that calls the property
  Object.defineProperty(targetPrototype, `__ctor__`, {
    value: 'model',
    enumerable: false,
    configurable: false
  });
  // store the binder instance itself
  Object.defineProperty(targetPrototype, `__modelbinder__`, {
    writable: true,
    enumerable: false,
    configurable: false
  });
  // make an instance on first request, this prop will become public through IModel interface
  Object.defineProperty(targetPrototype, 'model', {
    get: function () {
      if (!target.__modelbinder__) {
        target.__modelbinder__ = {};
      }
      const $this: BaseComponent = this as BaseComponent;
      if (!target.__modelbinder__[$this.__uniqueId__]) {
        target.__modelbinder__[$this.__uniqueId__] = ModelBinder.initialize(this /* the actual component */, options?.handler);
      }
      return target.__modelbinder__[$this.__uniqueId__];
    }
  });
}
