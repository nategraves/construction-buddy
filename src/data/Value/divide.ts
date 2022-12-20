import { divide as _divide } from "mathjs";
import { metricToCm } from "utils/math/metricToCm";

import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const divide = (v0: Value, v1: Value) => {
  if (isMetric(v0) && isMetric(v1)) {
    const v0InCm = metricToCm(v0);
    const v1InCm = metricToCm(v1);
    const mm = (v0.mm ?? 0) / (v1.mm ?? 0);
    const cm = (v0.cm ?? 0) / (v1.cm ?? 0);
    const m = (v0.m ?? 0) / (v1.m ?? 0);

    return {
      m,
      cm,
      mm,
    };
  }

  if (isImperial(v0) && isImperial(v1)) {
    let fr;

    if (v0.fr && v1.fr) {
      fr = _divide(v0.fr, v1.fr);
    }

    const ins = (v0.ins ?? 0) / (v1.ins ?? 0);
    const ft = (v0.ft ?? 0) / (v1.ft ?? 0);

    return {
      ...(ft ? { ft } : {}),
      ...(ins ? { ins } : {}),
      ...(fr ? { fr } : {}),
    };
  }

  // if (isImperial(v0) && isNumber(v1)) {
  // }

  if (isNumber(v0) && isNumber(v1)) {
    return v0 / v1;
  }
};
