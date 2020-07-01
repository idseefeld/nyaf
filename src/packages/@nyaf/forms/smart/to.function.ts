import { of, NameofOptions, Type } from '@nyaf/lib';
import { Display } from '../decorators/ui/hint-display.decorator';

export function to<T extends Object, H extends HTMLElement = HTMLElement>(
  nameFunction: ((obj: T) => any) | { new(...params: any[]): T },
  prop: keyof H | ((o: H) => any),
  target?: string,
  options?: NameofOptions): string {
  const sourceProperty = of(nameFunction, options).replace(/^@@(.*)@@$/, '$1');
  let targetProp = prop;
  if (typeof prop === 'function') {
    // handle c => c.value expressions
    targetProp = prop.toString().split('.')[1] as any;
  }
  const realTarget = (target !== undefined) ? `:${target}` : '';
  return `${targetProp}:${sourceProperty}${realTarget}`;
}

// export function isValid<T extends Object, H extends HTMLElement = HTMLElement>(
//   nameFunction: ((obj: T) => any) | { new(...params: any[]): T },
//   prop: keyof H | ((o: H) => any),
//   target?: string): string {
//   const sourceProperty = of(nameFunction, options).replace(/^@@(.*)@@$/, '$1');
//   let targetProp = prop;
//   if (typeof prop === 'function') {
//     // handle c => c.value expressions
//     targetProp = prop.toString().split('.')[1] as any;
//   }
//   const realTarget = (target !== undefined) ? `:${target}` : '';
//   return `${targetProp}:${sourceProperty}${realTarget}`;
// }
