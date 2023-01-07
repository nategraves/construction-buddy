import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const isSame = (v0: Value, v1: Value) =>
  (isImperial(v0) && isImperial(v1)) ||
  (isMetric(v0) && isMetric(v1)) ||
  (isNumber(v0) && isNumber(v1)) ||
  (v0 == null && v1 == null);
