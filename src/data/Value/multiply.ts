import { multiply as _multiply } from "mathjs";

import { Value } from "./Value";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { isImperial } from "./isImperial";
import { flatten } from "./flatten";
import { ImperialTarget, MetricTarget } from "types";

type EitherTarget = ImperialTarget | MetricTarget;

export const multiply = ({
  value,
  toAdd,
  target,
}: {
  value: Value;
  toAdd: Value;
  target?: Maybe<EitherTarget>;
}): Value => {
  if (isMetric(value) && isMetric(toAdd)) {
    return flatten(value) * flatten(toAdd);
  }
  if (isImperial(value) && isImperial(toAdd)) {
    const valueCm = flatten(value);
    const toAddCm = flatten(toAdd);

    if (target) {
      throw new Error("Unimplemented");
    }

    return valueCm * toAddCm;
  }

  if (isNumber(value) && isNumber(toAdd)) {
    return value ?? 0 * toAdd ?? 0;
  }
};
