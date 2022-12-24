// import { subtract as _subtract } from "mathjs";
// import { flatten } from "./flatten";

import { isImperial } from "./isImperial";
import { isMetric } from "./isMetric";
import { isNumber } from "./isNumber";
import { Value } from "./Value";

export const subtract = ({
  value,
  toSubtract,
}: {
  value: Value;
  toSubtract: Value;
}) => {
  if (isMetric(value) && isMetric(toSubtract)) {
    const m = (value.m ?? 0) - (toSubtract.m ?? 0);
    const cm = (value.cm ?? 0) - (toSubtract.cm ?? 0);
    const mm = (value.mm ?? 0) - (toSubtract.mm ?? 0);

    return {
      m,
      cm,
      mm,
    };
  }
  if (isImperial(value) && isImperial(toSubtract)) {
    // const valueIns = flatten(value);
    // const toSubtractIns = flatten(toSubtract);

    // const equals = valueIns - toSubtractIns;
    throw new Error("TODO");

    // const ft = (value.ft ?? 0) + (toSubtract.ft ?? 0);
    // const ins = (value.ins ?? 0) + (toSubtract.ins ?? 0);
    // const fr =
    //   value.fr && toSubtract.fr
    //     ? _subtract(value.fr, toSubtract.fr)
    //     : value.fr ?? toSubtract.fr;

    // return {
    //   ft,
    //   ins,
    //   fr,
    // };
  }

  if (isNumber(value) && isNumber(toSubtract)) {
    return value - toSubtract;
  }
};
