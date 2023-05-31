import { Value } from './Value';
import { isMetric } from './isMetric';
import { isNumber } from './isNumber';
import { isImperial } from './isImperial';
import { flatten } from './flatten';
import { unflatten } from './unflatten';
import { Units } from './Units';

export const multiply = ({ value, toApply }: { value: Value; toApply: Value }): Value => {
  const flatValue = flatten(value);
  const flatToApply = flatten(toApply);

  const bothMetric = isMetric(value) && isMetric(toApply);
  const bothImperial = isImperial(value) && isImperial(toApply);
  const bothNumber = isNumber(value) && isNumber(toApply);

  const result = flatValue * flatToApply;

  if (bothMetric || bothImperial || bothNumber) {
    return result;
  }

  if (isImperial(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.imperial,
      includeFt: 'ft' in value,
    });
  }

  if (isMetric(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.metric,
      includeM: 'm' in value,
    });
  }

  if (isMetric(value) && isMetric(toApply)) {
    // TODO: handle this
  }

  if (isImperial(value) && isImperial(toApply)) {
    // TODO: handle this
  }

  if (isNumber(value) && isNumber(toApply)) {
    return result;
  }

  throw new Error('Cannot multiply a number by a value');
};
