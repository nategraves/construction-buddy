import { divide as _divide, Fraction } from "mathjs";

import { flatten } from "./flatten";
import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const divide = ({
  value,
  toDivide,
}: {
  value: Value;
  toDivide: Value;
}): Value => {
  if (isMetric(value) && isMetric(toDivide)) {
    const valueCm = flatten(value);
    const toAddCm = flatten(toDivide);

    return valueCm / toAddCm;
  }

  if (isMetric(value) && isNumber(toDivide)) {
    const valueCm = flatten(value);
    const result = valueCm / toDivide;
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

  if (isImperial(value) && isImperial(toDivide)) {
    const v0Ins = flatten(value);
    const v1Ins = flatten(toDivide);
    return v0Ins / v1Ins;
  }

  if (isImperial(value) && isNumber(toDivide)) {
    const { ft, ins, fr } = value;
    return {
      ...(ft ? { ft: ft / toDivide } : {}),
      ...(ins ? { ins: ins / toDivide } : {}),
      ...(fr ? { fr: _divide(fr, toDivide) as Fraction } : {}),
    };
  }

  if (isNumber(value) && isNumber(toDivide)) {
    return value / toDivide;
  }
};
