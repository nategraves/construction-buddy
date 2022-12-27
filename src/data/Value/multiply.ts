// import { multiply as _multiply } from "mathjs";

import { Value } from "./Value";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { isImperial } from "./isImperial";
import { flatten } from "./flatten";

export const multiply = ({
  value,
  toApply,
}: {
  value: Value;
  toApply: Value;
}): Value => {
  if (isMetric(value) && isMetric(toApply)) {
    return flatten(value) * flatten(toApply);
  }
  if (isImperial(value) && isImperial(toApply)) {
    const valueCm = flatten(value);
    const toAddCm = flatten(toApply);

    return valueCm * toAddCm;
  }

  if (isNumber(value) && isNumber(toApply)) {
    return value ?? 0 * toApply ?? 0;
  }
};
