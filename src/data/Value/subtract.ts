import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { Value } from "./Value";

export const subtract = (v0: Value, v1: Value) => {
  if (isMetric(v0) && isMetric(v1)) {
    const mm = (v0.mm ?? 0) - (v1.mm ?? 0);
    const cm = (v0.cm ?? 0) - (v1.cm ?? 0);
    const m = (v0.m ?? 0) - (v1.m ?? 0);

    return {
      mm,
      cm,
      m,
    };
  }
  if (isImperial(v0) && isImperial(v1)) {
    const fr = (v0.fr.n ?? 0) + (v1.fr.n ?? 0);
    const ins = (v0.ins ?? 0) + (v1.ins ?? 0);
    const ft = (v0.ft ?? 0) + (v1.ft ?? 0);

    return {
      fr,
      ins,
      ft,
    };
  }
};
