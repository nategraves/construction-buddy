import { Value } from "./Value";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { isImperial } from "./isImperial";

export const multiply = (v0: Value, v1: Value) => {
  if (isMetric(v0) && isMetric(v1)) {
    const mm = (v0.mm ?? 0) * (v1.mm ?? 0);
    const cm = (v0.cm ?? 0) * (v1.cm ?? 0);
    const m = (v0.m ?? 0) * (v1.m ?? 0);

    return {
      mm,
      cm,
      m,
    };
  }
  if (isImperial(v0) && isImperial(v1)) {
    let fr;

    if (v0.fr && v1.fr) {
      v0.fr.multiply(v1);
    }
    const ins = (v0.ins ?? 0) * (v1.ins ?? 0);
    const ft = (v0.ft ?? 0) * (v1.ft ?? 0);

    return {
      ...(fr ? { fr } : {}),
      ft,
      ins,
    };
  }

  if (isNumber(v0) && isNumber(v1)) {
    return v0 ?? 0 * v1 ?? 0;
  }
};
