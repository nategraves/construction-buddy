import { isImperial } from './isImperial';
import { isMetric } from './isMetric';
import { isNumber } from './isNumber';
import { Value } from './Value';
import { flatten } from './flatten';
import { unflatten } from './unflatten';
import { Units } from './Units';

export const add = ({ value, toApply }: { value: Value; toApply: Value }): Value => {
  if (isMetric(value) && isMetric(toApply)) {
    return {
      m: (value.m ?? 0) + (toApply.m ?? 0),
      cm: (value.cm ?? 0) + (toApply.cm ?? 0),
      mm: (value.mm ?? 0) + (toApply.mm ?? 0),
    };
  }
  if (isImperial(value) && isImperial(toApply)) {
    const flatValue = flatten(value);
    const flatToApply = flatten(toApply);
    const total = flatValue + flatToApply;

    const includeFt = 'ft' in value || 'ft' in toApply;
    return unflatten({
      value: total,
      units: Units.imperial,
      includeFt,
    });
  }
  if (isNumber(value) && isNumber(toApply)) {
    return value + toApply;
  }

  throw new Error('Cannot add mismatched units');
};
