import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { multiply } from "./multiply";
import { Value } from "./Value";

export const square = (value: Value) => {
  if (isMetric(value)) {
    return multiply({ value, toAdd: value });
  }
  if (isImperial(value)) {
    return multiply({ value, toAdd: value });
  }
  if (isNumber(value)) {
    return value * value;
  }
};
