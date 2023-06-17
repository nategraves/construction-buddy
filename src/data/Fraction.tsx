import React from 'react';

import { Resolution } from './types/Resolution';
import { greatestCommonDivisor, leastCommonMultiple } from '../utils/math';

export class Fraction {
  n?: number;
  d: number;

  constructor(n: number, d: number) {
    this.n = n;
    this.d = d;
  }

  static fromDecimal = (decimal: number) => {
    // Calculate the fraction's numerator and denominator
    const numeratorArray = Math.pow(10, decimal).toString().split('.');
    let numerator = decimal * numeratorArray[numeratorArray.length - 1].length;
    const denominatorArray = decimal.toString().split('.');
    let denominator = Math.pow(10, denominatorArray[denominatorArray.length - 1].length);

    // Simplify the fraction
    const gcd = greatestCommonDivisor(numerator, denominator);
    numerator = Math.trunc(numerator / gcd);
    denominator = Math.trunc(denominator / gcd);

    return new Fraction(numerator, denominator);
  };

  static closestTapeMeasure = (decimal: number, resolution: Resolution = Resolution.thirtySecond) =>
    new Fraction(Math.round(resolution * decimal), resolution);

  toDecimal = () => (this.n ?? 0) / this.d;

  add = (other: Fraction) => {
    // Find the least common multiple of the two fractions' denominators
    let lcm = leastCommonMultiple(this.d, other.d);

    // Calculate the numerator of the new fraction
    let newN: number = (lcm / this.d) * (this.n ?? 0) + (lcm / other.d) * (other.n ?? 0);

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, lcm);
    newN = Math.trunc(newN / gcd);
    lcm = Math.trunc(lcm / gcd);

    return new Fraction(newN, lcm);
  };

  subtract = (other: Fraction) => {
    // Find the least common multiple of the two fractions' denominators
    let lcm = leastCommonMultiple(this.d, other.d);

    // Calculate the numerators of the new fraction
    let newN = (lcm / this.d) * (this.n ?? 0) - (lcm / other.d) * (other.n ?? 0);

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, lcm);
    newN = Math.trunc(newN / gcd);
    lcm = Math.trunc(lcm / gcd);

    return new Fraction(newN, lcm);
  };

  divide = (other: Fraction) => {
    // Calculate the numerators and denominators of the new fraction
    let newN = (this.n ?? 0) * other.d;
    let newD = this.d * (other.n ?? 0);

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, newD);
    newN = Math.trunc(newN / gcd);
    newD = Math.trunc(newD / gcd);

    return new Fraction(newN, newD);
  };

  multiply = (other: Fraction) => {
    // Calculate the numerators and denominators of the new fraction
    let newN = (this.n ?? 0) * (other.n ?? 0);
    let newD = this.d * other.d;

    // Simplify the new fraction
    const gcd = greatestCommonDivisor(newN, newD);
    newN = Math.trunc(newN / gcd);
    newD = Math.trunc(newD / gcd);

    return new Fraction(newN, newD);
  };

  toString = () => `${this.n}/${this.d}`;

  toComponent = () => {
    if (this.n === 0) {
      return null;
    }
    return (
      <div className="flex col" style={{ alignItems: 'center' }}>
        <div>{this.n ?? 'X'}</div>
        <hr style={{ margin: 0 }} />
        <div>{this.d}</div>
      </div>
    );
  };
}
