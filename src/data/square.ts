import { isImperial } from './isImperial';
import { isMetric } from './isMetric';
import { Value } from './Value';
import { flatten } from './flatten';
import { unflatten } from './unflatten';
import { Units } from './Units';

export const square = ({ value }: { value: Value }) => {
  const valueFlat = flatten(value);
  let result: Value = valueFlat * valueFlat;
  if (isMetric(value)) {
    result = unflatten({
      value: result,
      units: Units.metric,
      includeM: `m` in value,
    });
    return;
  } else if (isImperial(value)) {
    result = unflatten({
      value: result,
      units: Units.imperial,
      includeFt: `ft` in value,
    });
  }

  return result;
};
