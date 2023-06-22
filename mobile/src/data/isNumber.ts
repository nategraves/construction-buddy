import { Value } from './types/Value';

export function isNumber(value: Value | string | undefined): value is number {
  return typeof value === 'number';
}
