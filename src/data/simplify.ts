import { Fraction } from './Fraction';
import { Value } from './Value';
import { isImperial } from './isImperial';
import { isMetric } from './isMetric';

export const simplify = (value: Value): Value => {
  if (isImperial(value)) {
    // Convert fractions to inches
    const frIns = value.fr ? value.fr.n / value.fr.d : 0;
    const totalIns = (value.ins ?? 0) + frIns;

    // Convert inches to feet and inches
    const newFt = Math.floor(totalIns / 12) + (value.ft ?? 0);
    const newIns = totalIns % 12;
    const newFr = Fraction.fromDecimal(newIns % 1);

    return { ft: newFt, ins: newIns, fr: newFr };
  } else if (isMetric(value)) {
    // Convert millimeters to centimeters and millimeters
    let cm = Math.floor((value.mm ?? 0) / 10);
    let mm = (value.mm ?? 0) % 10;

    // Convert centimeters to meters and centimeters
    let m = Math.floor((value.cm ?? 0) / 100);
    cm = (value.cm ?? 0) % 100;

    // Add the meters, centimeters, and millimeters to the value's meters, centimeters, and millimeters
    let newM = (value.m ?? 0) + m;
    let newCm = cm;
    let newMm = mm;

    return { m: newM, cm: newCm, mm: newMm };
  }
  return value;
};
