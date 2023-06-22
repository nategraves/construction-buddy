import { Fraction, ImperialValue, MetricValue, multiply } from 'src/data';

describe('multiply correctly multiplies', () => {
  test('number, number', () => {
    const value = 8;
    const toApply = 2;
    const expected = 16;
    const result = multiply({ value, toApply });
    expect(result).toBe(expected);
  });

  test('ImperialValue,ImperialValue', () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: new Fraction(1, 2) };
    const toApply: ImperialValue = { ft: 2, ins: 2, fr: new Fraction(1, 3) };
    const expected = '2751.833333';
    const result = multiply({ value, toApply }) as number;
    expect(result.toFixed(6)).toBe(expected);
  });

  test('ImperialValue,Number', () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: new Fraction(1, 2) };
    const toApply = 2;
    const expected: ImperialValue = { ft: 17, ins: 5, fr: new Fraction(0, 1) };
    const result = multiply({ value, toApply }) as ImperialValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('MetricValue,MetricValue', () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 8 };
    const toApply: MetricValue = { m: 2, cm: 2, mm: 2 };
    const expected = 163539.36;
    const result = multiply({ value, toApply });
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test('MetricValue,Number', () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 2 };
    const toApply: number = 2;
    const expected: MetricValue = { m: 16, cm: 16, mm: 4 };
    const result = multiply({ value, toApply }) as MetricValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
