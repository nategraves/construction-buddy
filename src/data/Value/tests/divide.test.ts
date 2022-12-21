import { fraction } from "mathjs";

import { divide } from "../divide";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("divide correctly adds", () => {
  test("number, number", () => {
    const value = 8;
    const toDivide = 2;
    const expected = 4;
    const result = divide({ value, toDivide });
    expect(result).toBe(expected);
  });

  test("ImperialValue,ImperialValue", () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: fraction(1, 2) };
    const toDivide: ImperialValue = { ft: 2, ins: 2, fr: fraction(1, 3) };
    const expected = "3.968354";
    const result = divide({ value, toDivide }) as number;
    expect(result.toFixed(6)).toBe(expected);
  });

  test("ImperialValue,Number", () => {
    const value: ImperialValue = { ft: 8, ins: 8, fr: fraction(1, 2) };
    const toDivide: number = 2;
    const expected: ImperialValue = { ft: 4, ins: 4, fr: fraction(1, 4) };
    const result = divide({ value, toDivide }) as ImperialValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test("MetricValue,MetricValue", () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 8 };
    const toDivide: MetricValue = { m: 2, cm: 2, mm: 2 };
    const expected = 4;
    const result = divide({ value, toDivide });
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test("MetricValue,Number", () => {
    const value: MetricValue = { m: 8, cm: 8, mm: 2 };
    const toDivide: number = 2;
    const expected: MetricValue = { m: 4, cm: 4, mm: 1 };
    const result = divide({ value, toDivide }) as MetricValue;
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
