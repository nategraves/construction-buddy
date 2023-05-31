import { Fraction, ImperialValue, MetricValue, subtract } from '../';

describe('Subtract correctly subtracts', () => {
  test('number, number', () => {
    const value = 3;
    const toApply = 1;
    const expected = 2;
    const result = subtract({ value, toApply });
    expect(result).toBe(expected);
  });

  test('ImperialValue,ImperialValue', () => {
    const value: ImperialValue = { ft: 3, ins: 3, fr: new Fraction(1, 3) };
    const toApply: ImperialValue = { ft: 1, ins: 1, fr: new Fraction(1, 6) };
    const expected: ImperialValue = { ft: 2, ins: 2, fr: new Fraction(11, 64) };
    const result = subtract({ value, toApply });
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('MetricValue,MetricValue', () => {
    const value: MetricValue = { m: 3, cm: 3, mm: 3 };
    const toApply: MetricValue = { m: 1, cm: 1, mm: 1 };
    const expected: MetricValue = { m: 2, cm: 2, mm: 2 };
    const result = subtract({ value, toApply });
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
