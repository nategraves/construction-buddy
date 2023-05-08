import { flatten } from './flatten';
import { Value } from './Value';
import { isMetric } from './isMetric';
import { isImperial } from './isImperial';
import { Units } from './Units';
import { unflatten } from './unflatten';

export const squareRoot = ({ value }: { value: Value }): Value => {
  const valueFlat = flatten(value);
  let result: Value = Math.sqrt(valueFlat);

  if (isImperial(value)) {
    result = unflatten({
      value: result,
      units: Units.imperial,
      includeFt: 'ft' in value,
    });
  } else if (isMetric(value)) {
    result = unflatten({
      value: result,
      units: Units.metric,
      includeM: 'm' in value,
    });
  }

  return result;
};
