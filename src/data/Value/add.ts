import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const add = (v0: Value, v1: Value): Value => {
  if (isMetric(v0) && isMetric(v1)) {
    const mm = v0.mm ?? 0 + v1.mm ?? 0;
    const cm = v0.cm ?? 0 + v1.cm ?? 0;
    const m = v0.m ?? 0 + v1.m ?? 0;

    return {
      mm,
      cm,
      m,
    };
  }
  if (isImperial(v0) && isImperial(v1)) {
    console.log("Adding imperial");
    const n = v0.n ?? 0 + v1.n ?? 0;
    const d = v0.d ?? 0 + v1.d ?? 0;
    const ins = v0.ins ?? 0 + v1.ins ?? 0;
    const ft = v0.ft ?? 0 + v1.ft ?? 0;

    return {
      n,
      d,
      ins,
      ft,
    };
  }
  if (isNumber(v0) && isNumber(v1)) {
    return v0 + v1;
  }
};
