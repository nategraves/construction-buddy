import { divide as _divide, Fraction } from "mathjs";

import { flatten } from "./flatten";
import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const divide = ({
  value,
  toApply,
}: {
  value: Value;
  toApply: Value;
}): Value => {
  if (isMetric(value) && isMetric(toApply)) {
    const valueCm = flatten(value);
    const toAddCm = flatten(toApply);

    return valueCm / toAddCm;
  }

  if (isMetric(value) && isNumber(toApply)) {
    const valueCm = flatten(value);
    const result = valueCm / toApply;
    const m = result / 100 > 1 ? Math.round(result / 100) : null;

    const xcm = Math.round(result % 100);
    const cm = value.cm == null && xcm === 0 ? null : xcm;

    const xmm = Math.round((result % 1) * 10);
    const mm = xmm > 0 ? xmm : null;

    return {
      ...(m ? { m } : {}),
      ...(cm ? { cm } : {}),
      ...(mm ? { mm } : {}),
    };
  }

  if (isImperial(value) && isImperial(toApply)) {
    const v0Ins = flatten(value);
    const v1Ins = flatten(toApply);
    return v0Ins / v1Ins;
  }

  if (isImperial(value) && isNumber(toApply)) {
    const { ft, ins, fr } = value;
    return {
      ...(ft ? { ft: ft / toApply } : {}),
      ...(ins ? { ins: ins / toApply } : {}),
      ...(fr ? { fr: _divide(fr, toApply) as Fraction } : {}),
    };
  }

  if (isNumber(value) && isNumber(toApply)) {
    return value / toApply;
  }
};
