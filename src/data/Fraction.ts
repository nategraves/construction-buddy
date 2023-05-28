import { Resolution } from './Resolution';

export type TFraction = {
  n: number;
  d: number;
  add: (other: TFraction) => TFraction;
  closestTapeMeasure: (decimal: number, resolution?: Resolution) => TFraction;
  divide: (other: TFraction) => TFraction;
  fromDecimal: (decimal: number) => TFraction;
  greatestCommonDivisor: (a: number, b: number) => number;
  leastCommonMultiple: (a: number, b: number) => number;
  multiply: (other: TFraction) => TFraction;
  subtract: (other: TFraction) => TFraction;
  toDecimal: () => number;
};

export const Fraction = (_n: number, _d: number): TFraction => {
  const n = _n;
  const d = _d;

  const greatestCommonDivisor = (a: number, b: number): number => {
    if (b === 0) {
      return a;
    }
    return greatestCommonDivisor(b, a % b);
  };

  const leastCommonMultiple = (a: number, b: number) => {
    return Math.trunc((a * b) / greatestCommonDivisor(a, b));
  };

  const fromDecimal = (decimal: number) => {
    // Calculate the fraction's numerator and denominator
    const numeratorArray = Math.pow(10, decimal).toString().split('.');
    let numerator = decimal * numeratorArray[numeratorArray.length - 1].length;
    const denominatorArray = decimal.toString().split('.');
    let denominator = Math.pow(10, denominatorArray[denominatorArray.length - 1].length);

    // Simplify the fraction
    const gcd = greatestCommonDivisor(numerator, denominator);
    numerator = Math.trunc(numerator / gcd);
    denominator = Math.trunc(denominator / gcd);

    return Fraction(numerator, denominator);
  };

  const toDecimal = () => n / d;

  const add = (other: TFraction) => {
    // Find the least common multiple of the two fractions' denominators
    let lcm = leastCommonMultiple(d, other.d);

    // Calculate the numerators of the new fraction
    let newN: number = (lcm / d) * n + (lcm / other.d) * other.n;

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, lcm);
    newN = Math.trunc(newN / gcd);
    lcm = Math.trunc(lcm / gcd);

    return Fraction(newN, lcm);
  };

  const subtract = (other: TFraction) => {
    // Find the least common multiple of the two fractions' denominators
    let lcm = leastCommonMultiple(d, other.d);

    // Calculate the numerators of the new fraction
    let newN = (lcm / d) * n - (lcm / other.d) * other.n;

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, lcm);
    newN = Math.trunc(newN / gcd);
    lcm = Math.trunc(lcm / gcd);

    return Fraction(newN, lcm);
  };

  const divide = (other: TFraction) => {
    // Calculate the numerators and denominators of the new fraction
    let newN = n * other.d;
    let newD = d * other.n;

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, newD);
    newN = Math.trunc(newN / gcd);
    newD = Math.trunc(newD / gcd);

    return Fraction(newN, newD);
  };

  const multiply = (other: TFraction) => {
    // Calculate the numerators and denominators of the new fraction
    let newN = n * other.n;
    let newD = d * other.d;

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, newD);
    newN = Math.trunc(newN / gcd);
    newD = Math.trunc(newD / gcd);

    return Fraction(newN, newD);
  };

  const closestTapeMeasure = (decimal: number, resolution: Resolution = Resolution.thirtySecond) =>
    Fraction(Math.round(resolution * decimal), resolution);

  return {
    n,
    d,
    add,
    closestTapeMeasure,
    divide,
    fromDecimal,
    greatestCommonDivisor,
    leastCommonMultiple,
    multiply,
    subtract,
    toDecimal,
  };
};
