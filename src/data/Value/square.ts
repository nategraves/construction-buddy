import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { multiply } from "./multiply";
import { Value } from "./Value";

export const square = (v0: Value) => {
  if (isMetric(v0)) {
    return multiply(v0, v0);
  }
  if (isImperial(v0)) {
    return multiply(v0, v0);
  }
};
