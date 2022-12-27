import { flatten } from "./flatten";
import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { unflatten } from "./unflatten";
import { Value } from "./Value";
import { Units } from "../../types";

export const subtract = ({
  value,
  toApply,
}: {
  value: Value;
  toApply: Value;
}) => {
  if (isMetric(value) && isMetric(toApply)) {
    const m = (value.m ?? 0) - (toApply.m ?? 0);
    const cm = (value.cm ?? 0) - (toApply.cm ?? 0);
    const mm = (value.mm ?? 0) - (toApply.mm ?? 0);

    return {
      m,
      cm,
      mm,
    };
  }
  if (isImperial(value) && isImperial(toApply)) {
    const flatValue = flatten(value);
    const flatToApply = flatten(toApply);
    const total = flatValue - flatToApply;
    const includeFt = "ft" in value || "ft" in toApply;
    return unflatten({ value: total, units: Units.imperial, includeFt });
  }

  if (isNumber(value) && isNumber(toApply)) {
    return value - toApply;
  }
};
