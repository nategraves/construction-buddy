import { number } from 'mathjs';

import { isImperial, isNumber, Value } from './index';

export const flatten = (value: Value): number => {
  if (isNumber(value)) {
    return value;
  } else if (isImperial(value)) {
    const { ft, ins, fr } = value;
    let inches = 0;

    if (ft != null && ft > 0) {
      inches += ft * 12;
    }
    if (ins != null && ins > 0) {
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
