import { ImperialValue } from './types/ImperialValue';
import { Fraction } from './Fraction';

export const toggleFeetAndInches = (value: ImperialValue): ImperialValue => {
  const { ft, ins, fr } = value;
  const hasFeet = ft != null && ft > 0;
  const hasInches = ins != null && ins >= 12;

  let newIns, newFt, newFr;

  if (hasFeet) {
    newIns = (ins ?? 0) + (ft ?? 0) * 12;
    newFt = 0;
    newFr = Fraction.fromDecimal((ins ?? 0) % 1);
  } else if (hasInches) {
    newFt = (ins ?? 0) / 12;
    newIns = (ins ?? 0) % 12;
    newFr = Fraction.fromDecimal(((ins ?? 0) % 12) % 1);
  }

  return { ft: newFt, ins: newIns, fr: newFr };
};
