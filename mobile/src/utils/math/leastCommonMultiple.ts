import { greatestCommonDivisor } from './greatestCommonDivisor';

export const leastCommonMultiple = (a: number, b: number) => {
  return Math.trunc((a * b) / greatestCommonDivisor(a, b));
};
