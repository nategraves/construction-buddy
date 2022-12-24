import { add as _add, Fraction } from "mathjs";

import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const add = ({
  value,
  toAdd,
}: {
  value: Value;
  toAdd: Value;
}): Value => {
  if (isMetric(value) && isMetric(toAdd)) {
    return {
      m: (value.m ?? 0) + (toAdd.m ?? 0),
      cm: (value.cm ?? 0) + (toAdd.cm ?? 0),
      mm: (value.mm ?? 0) + (toAdd.mm ?? 0),
    };
  }
  if (isImperial(value) && isImperial(toAdd)) {
    let fr: Maybe<Fraction>;

    if (value.fr && toAdd.fr) {
      fr = _add(value.fr, toAdd.fr);
    }
    const ins = (value.ins ?? 0) + (toAdd.ins ?? 0);
    const ft = (value.ft ?? 0) + (toAdd.ft ?? 0);

    if (value.fr && !toAdd.fr) {
      fr = value.fr;
    }

    if (toAdd.fr && !value.fr) {
      fr = toAdd.fr;
    }

    return {
      ft,
      ins,
      ...(fr ? { fr } : {}),
    };
  }
  if (isNumber(value) && isNumber(toAdd)) {
    return value + toAdd;
  }
};
