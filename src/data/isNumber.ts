import { Value } from './Value';

export function isNumber(value: Value | undefined): value is number {
  return typeof value === 'number';
}
