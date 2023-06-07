import { ImperialValue } from './ImperialValue';
import { Value } from './Value';

export function isImperial(value: Value | string | undefined): value is ImperialValue {
  if (value == null || typeof value === 'number' || typeof value === 'string') {
    return false;
  }
  return 'ft' in value || 'in' in value || 'num' in value || 'den' in value;
}
