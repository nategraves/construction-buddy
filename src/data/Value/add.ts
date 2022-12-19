import { add as _add, Fraction } from "mathjs";

import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const add = (v0: Value, v1: Value): Value => {
  if (isMetric(v0) && isMetric(v1)) {
    return {
      m: (v0.m ?? 0) + (v1.m ?? 0),
      cm: (v0.cm ?? 0) + (v1.cm ?? 0),
      mm: (v0.mm ?? 0) + (v1.mm ?? 0),
    };
  }
  if (isImperial(v0) && isImperial(v1)) {
    let fr: Maybe<Fraction>;

    if (v0.fr && v1.fr) {
      fr = _add(v0.fr, v1.fr);
    }
    const ins = (v0.ins ?? 0) + (v1.ins ?? 0);
    const ft = (v0.ft ?? 0) + (v1.ft ?? 0);

    if (v0.fr && !v1.fr) {
      fr = v0.fr;
    }

    if (v1.fr && !v0.fr) {
      fr = v1.fr;
    }

    return {
      ft,
      ins,
      ...(fr ? { fr } : {}),
    };
  }
  if (isNumber(v0) && isNumber(v1)) {
    return v0 + v1;
  }
};
