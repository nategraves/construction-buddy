import { Value } from './Value';
import { isImperial } from './isImperial';
import { isMetric } from './isMetric';
import { isNumber } from './isNumber';

export const valueToString = (value: Value) => {
  if (isNumber(value)) {
    return value.toString();
  } else if (isImperial(value)) {
    return `${value.ft}' ${value.ins}" ${value.fr?.toString() ?? ''}`;
  } else if (isMetric(value)) {
    return `${value.m}m ${value.cm ?? 0}cm ${value.mm ?? 0}mm`;
  }
  throw new Error('Unhandleable value');
};
