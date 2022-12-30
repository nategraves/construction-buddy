import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { Value } from "./Value";
import { flatten } from "./flatten";
import { unflatten } from "./unflatten";
import { Units } from "../../types";

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
  }
  if (isImperial(value)) {
    result = unflatten({
      value: result,
      units: Units.imperial,
      includeFt: `ft` in value,
    });
  }

  return result;
};
