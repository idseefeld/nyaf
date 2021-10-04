﻿/**
 * The minlength decorator assures that a string field contains at least a number of characters.
 *
 * @param len: the required length.
 * @param msg: A custom message.
 *
 */
export function MinLength(len: number, msg?: string) {
  // the original decorator
  function minLengthInternal(target: Object, property: string | symbol): void {
    minLengthInternalSetup(target, property.toString(), len, msg);
  }

  // return the decorator
  return minLengthInternal;
}

/**
 * @ignore
 */
function minLengthInternalSetup(target: any, key: string, len: number, msg?: string) {

  // create a helper property to transport a meta data value
  Object.defineProperty(target, `__has__${MinLength.internal}__${key}`, {
    value: true,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(target, `__pattern__${MinLength.internal}__${key}`, {
    value: len,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(target, `__err__${MinLength.internal}__${key}`, {
    value: msg || `The field ${key} needs at least ${target[`__pattern__${MinLength.internal}__${key}`]} characters.`,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(target, `__isValid__${MinLength.internal}__${key}`, {
    get: function () {
      return this[key]?.toString().length >= this[`__pattern__${MinLength.internal}__${key}`] || false;
    },
    enumerable: false,
    configurable: false
  });
}

MinLength.internal = 'minlength';
MinLength.pattern = '__pattern__minlength';
MinLength.err = '__err__minlength__';