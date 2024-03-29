import { Value } from './types/Value';
import { isNumber } from './isNumber';
import { isImperial } from './isImperial';

export const stringify = ({ value }: { value: Value }): string => {
  if (isNumber(value)) {
    return String(value);
  } else if (isImperial(value)) {
    const measurements = [];
    const { ft, ins, fr } = value;
    if (ft != null) {
      measurements.push(`${ft}ft`);
    }
    if (ins != null) {
      measurements.push(`${ins}in`);
    }
    if (fr != null && fr.n !== 0) {
      measurements.push(`${value.fr!.n}/${value.fr!.d}`);
    }

    return measurements.join(' - ');
  }
  const measurements = [];
  const { m, cm, mm } = value;
  if (m != null) {
    measurements.push(`${value.m}m`);
  }
  if (cm != null) {
    measurements.push(`${value.cm}cm`);
  }
  if (mm != null) {
    measurements.push(`${value.mm}mm`);
  }
  return measurements.join(' - ');
};
