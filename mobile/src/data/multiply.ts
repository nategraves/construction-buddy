import { Value } from './types/Value';
import { isMetric } from './isMetric';
import { isNumber } from './isNumber';
import { isImperial } from './isImperial';
import { flatten } from './flatten';
import { unflatten } from './unflatten';
import { Units } from './types/Units';
import { reduceSquared } from './reduceSquared';

export const multiply = ({ value, toApply }: { value: Value; toApply: Value }): Value => {
  const flatValue = flatten(value);
  const flatToApply = flatten(toApply);

  const bothMetric = isMetric(value) && isMetric(toApply);
  const bothImperial = isImperial(value) && isImperial(toApply);
  const bothNumber = isNumber(value) && isNumber(toApply);

  const result = flatValue * flatToApply;

  if (bothNumber) {
    return result;
  }

  if (isImperial(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.imperial,
      includeFt: 'ft' in value,
    });
  }

  if (isNumber(value) && isImperial(toApply)) {
    return unflatten({
      value: result,
      units: Units.imperial,
      includeFt: 'ft' in toApply,
    });
  }

  if (isMetric(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.metric,
      includeM: 'm' in value,
    });
  }

  if (isNumber(value) && isMetric(toApply)) {
    return unflatten({
      value: result,
      units: Units.metric,
      includeM: 'm' in toApply,
    });
  }

  if (bothMetric) {
    return reduceSquared(result, Units.metric);
  }

  if (bothImperial) {
    return reduceSquared(result, Units.imperial);
  }

  throw new Error('Unhandled multiplication case');
};
