﻿/**
 * This decorator is for validation of mandatory fields.
 * The default message is 'The field {keyName} is required'.
 *
 * @param msg The error message shown in case of error. A default value is being provided if omitted.
 *
 */
export function Required(msg?: string) {
  // the original decorator
  function requiredInternal(target: Object, property: string | symbol): void {
    requiredInternalSetup(target, property.toString(), msg);
  }

  // return the decorator
  return requiredInternal;
}

/**
 * @ignore
 */
function requiredInternalSetup(target: any, key: string, msg?: string) {
  Object.defineProperty(target, `__has__${Required.internal}__${key}`, {
    value: true,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(target, `${Required.err}${key}`, {
    value: msg || `The field ${key} is required.`,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(target, `__isValid__${Required.internal}__${key}`, {
    get: function () {
      return !!this[key];
    },
    enumerable: false,
    configurable: false
  });
}

Required.internal = 'required';
Required.err = '__err__required__';