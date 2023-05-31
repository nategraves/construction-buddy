import { Value } from './Value';
import { isImperial } from './isImperial';
import { isNumber } from './isNumber';
import { isMetric } from './isMetric';

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
      inches += fr.toDecimal();
    }

    return inches;
  } else if (isMetric(value)) {
    const { m, cm, mm } = value;
    return (m ?? 0) * 100 + (cm ?? 0) + (mm ?? 0) * 0.1;
  }

  throw new Error('Unhandleable value');
};
