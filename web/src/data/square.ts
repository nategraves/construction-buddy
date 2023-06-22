import { isImperial } from './isImperial';
import { isMetric } from './isMetric';
import { Value } from './types/Value';
import { flatten } from './flatten';
import { unflatten } from './unflatten';
import { Units } from './types/Units';
import { isNumber } from './isNumber';

export const square = ({ value }: { value: Value }) => {
  const valueFlat = flatten(value);
  let result: Value = valueFlat * valueFlat;
  if (isMetric(value)) {
    return unflatten({
      value: result,
      units: Units.metric,
      includeM: `m` in value,
    });
  } else if (isImperial(value)) {
    return unflatten({
      value: result,
      units: Units.imperial,
      includeFt: `ft` in value,
    });
  } else if (isNumber(value)) {
    return result;
  }
  throw new Error('Unknown input to square');
};
