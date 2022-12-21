import { number } from "mathjs";

import { isImperial, ImperialValue, MetricValue } from "./index";

export const flatten = (value: ImperialValue | MetricValue): number => {
  if (isImperial(value)) {
    const { ft, ins, fr } = value;
    let inches = 0;

    if (ft > 0) {
      inches += ft * 12;
    }
    if (ins > 0) {
      inches += ins;
    }
    if (fr) {
      inches += number(fr);
    }

    return inches;
  }

  const { m, cm, mm } = value;
  return (m ?? 0) * 100 + (cm ?? 0) + (mm ?? 0) * 0.1;
};
