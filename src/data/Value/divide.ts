import { Units } from "../../types";

import { flatten } from "./flatten";
import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { unflatten } from "./unflatten";
import { Value } from "./Value";

export const divide = ({
  value,
  toApply,
}: {
  value: Value;
  toApply: Value;
}): Value => {
  console.log("made it to divide.ts");
  const flatValue = flatten(value);
  const flatToApply = flatten(toApply);

  const bothMetric = isMetric(value) && isMetric(toApply);
  const bothImperial = isImperial(value) && isImperial(toApply);
  const bothNumber = isNumber(value) && isNumber(toApply);

  const result = flatValue / flatToApply;
  console.log({ result });

  if (bothMetric || bothImperial || bothNumber) {
    return result;
  }

  if (isMetric(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.metric,
      includeM: "m" in value,
    });
  }

  if (isImperial(value) && isNumber(toApply)) {
    return unflatten({
      value: result,
      units: Units.imperial,
      includeFt: "ft" in value,
    });
  }
};
