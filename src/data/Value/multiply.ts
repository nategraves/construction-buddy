// import { multiply as _multiply } from "mathjs";

import { Value } from "./Value";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { isImperial } from "./isImperial";
import { flatten } from "./flatten";

export const multiply = ({
  value,
  toMultiply,
}: {
  value: Value;
  toMultiply: Value;
}): Value => {
  if (isMetric(value) && isMetric(toMultiply)) {
    return flatten(value) * flatten(toMultiply);
  }
  if (isImperial(value) && isImperial(toMultiply)) {
    const valueCm = flatten(value);
    const toAddCm = flatten(toMultiply);

    return valueCm * toAddCm;
  }

  if (isNumber(value) && isNumber(toMultiply)) {
    return value ?? 0 * toMultiply ?? 0;
  }
};
