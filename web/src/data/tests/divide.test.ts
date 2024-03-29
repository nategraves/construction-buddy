import { divide, ImperialValue, MetricValue } from 'src/data';
import { Fraction } from '../Fraction';

describe('divide correctly divides', () => {
  test('number, number', () => {
    const value = 8;
    const toApply = 2;
    const expected = 4;
    const result = divide({ value, toApply });
    expect(result).toBe(expected);
  });

  test('ImperialValue,ImperialValue', () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: new Fraction(1, 2) };
    const toApply: ImperialValue = { ft: 2, ins: 2, fr: new Fraction(1, 3) };
    const expected = '3.968354';
    const result = divide({ value, toApply }) as number;
    expect(result.toFixed(6)).toBe(expected);
  });

  test('ImperialValue,Number', () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: new Fraction(1, 2) };
    const toApply = 2;
    const expected: ImperialValue = { ft: 4, ins: 4, fr: new Fraction(1, 4) };
    const result = divide({ value, toApply }) as ImperialValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('Handles dividing evenly', () => {
    const value: ImperialValue = { ft: 5 };
    const toApply = 5;
    const expected: ImperialValue = { ft: 1, ins: 0, fr: new Fraction(0, 1) };
    const result = divide({ value, toApply }) as ImperialValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('MetricValue,MetricValue', () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 8 };
    const toApply: MetricValue = { m: 2, cm: 2, mm: 2 };
    const expected = 4;
    const result = divide({ value, toApply });
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('MetricValue,Number', () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 2 };
    const toApply: number = 2;
    const expected: MetricValue = { m: 4, cm: 4, mm: 1 };
    const result = divide({ value, toApply }) as MetricValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
