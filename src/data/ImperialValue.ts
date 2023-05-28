import { ImperialTarget } from './ImperialTarget';
import { Fraction, TFraction } from './Fraction';

export type TImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.fr]?: TFraction;
};

export const flattenImperialValue = (imperialValue: TImperialValue): number => {
  const ftIns = (imperialValue.ft ?? 0) * 12;
  const ins = imperialValue.ins ?? 0;
  const fr = imperialValue.fr?.toDecimal() ?? 0.0;
  return ftIns + ins + fr;
};

export const unflattenImperialValue = (value: number, includeFt: boolean) => {
  const decimal = value % 1;
  const newFt = includeFt ? value / 12.0 : undefined;
  const newIns = includeFt ? value - (newFt ?? 0) * 12.0 - decimal : value - decimal;
  const newFr = Fraction(0, 0).fromDecimal(decimal);
  return ImperialValue({ ft: newFt, ins: newIns, fr: newFr });
};

export const ImperialValue = ({ ft: _ft, ins: _ins, fr: _fr }: TImperialValue) => {
  let ft = _ft;
  let ins = _ins;
  let fr = _fr;

  const simplify = (value: TImperialValue) => {
    // Convert fractions to inches
    const frIns = value.fr ? value.fr.n / value.fr.d : 0;
    const totalIns = (value.ins ?? 0) + frIns;

    // Convert inches to feet and inches
    const newFt = Math.floor(totalIns / 12) + (value.ft ?? 0);
    const newIns = totalIns % 12;
    const newFr = Fraction(0, 0).fromDecimal(newIns % 1);

    return ImperialValue({ ft: newFt, ins: newIns, fr: newFr });
  };

  const toggleFeetAndInches = () => {
    const hasFeet = ft != null && ft > 0;
    const hasInches = ins != null && ins >= 12;

    let newIns, newFt, newFr;

    if (hasFeet) {
      newIns = (ins ?? 0) + (ft ?? 0) * 12;
      newFt = 0;
      newFr = Fraction(0, 1).fromDecimal((ins ?? 0) % 1);
    } else if (hasInches) {
      newFt = (ins ?? 0) / 12;
      newIns = (ins ?? 0) % 12;
      newFr = Fraction(0, 1).fromDecimal(((ins ?? 0) % 12) % 1);
    }

    return ImperialValue({ ft: newFt, ins: newIns, fr: newFr });
  };

  const add = (other: TImperialValue) => {
    const a = flattenImperialValue(ImperialValue({ ft, ins, fr }));
    const b = flattenImperialValue(other);
    return unflattenImperialValue(a + b, other.ft != null || ft != null);
  };

  return {
    ft,
    ins,
    fr,
    add,
    simplify,
    toggleFeetAndInches,
  };
};
