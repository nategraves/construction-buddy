import { fraction } from "mathjs";

import { divide } from "../divide";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("divide correctly adds", () => {
  test("number, number", () => {
    const start = 8;
    const divideBy = 2;
    const expected = 4;
    const result = divide(start, divideBy);
    expect(result).toBe(expected);
  });

  test("ImperialValue,ImperialValue", () => {
    const start: ImperialValue = { ft: 8, ins: 8, fr: fraction(1, 2) };
    const divideBy: ImperialValue = { ft: 2, ins: 2, fr: fraction(1, 3) };
    const expected: ImperialValue = { ft: 4, ins: 4, fr: fraction(3, 2) };
    const result = divide(start, divideBy);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test("MetricValue,MetricValue", () => {
    const start: MetricValue = { m: 8, cm: 8, mm: 8 };
    const divideBy: MetricValue = { m: 2, cm: 2, mm: 2 };
    const expected: MetricValue = { m: 4, cm: 4, mm: 4 };
    const result = divide(start, divideBy);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
