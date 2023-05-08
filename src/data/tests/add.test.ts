import { fraction } from 'mathjs';

import { add, ImperialValue, MetricValue } from 'src/data';

describe('Add correctly adds', () => {
  test('number, number', () => {
    const value = 1;
    const expected = 2;
    const result = add({ value, toApply: value });
    expect(result).toBe(expected);
  });

  test('ImperialValue,ImperialValue', () => {
    const value: ImperialValue = { ft: 1, ins: 1, fr: fraction(1, 3) };
    const toApply: ImperialValue = { ft: 1, ins: 1, fr: fraction(1, 6) };
    const result = add({ value, toApply });
    expect(JSON.stringify(result)).toBe(JSON.stringify({ ft: 2, ins: 2, fr: fraction(1, 2) }));
  });

  test('MetricValue,MetricValue', () => {
    const value: MetricValue = { m: 1, cm: 1, mm: 1 };
    const result = add({ value, toApply: value });
    expect(JSON.stringify(result)).toBe(JSON.stringify({ m: 2, cm: 2, mm: 2 }));
  });
});
