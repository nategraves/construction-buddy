import { fraction } from "mathjs";

import { add } from "../add";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("Add correctly adds", () => {
  test("number, number", () => {
    const toAdd = 1;
    const expected = 2;
    const result = add(toAdd, toAdd);
    expect(result).toBe(expected);
  });

  test("ImperialValue,ImperialValue", () => {
    const toAdd1: ImperialValue = { ft: 1, ins: 1, fr: fraction(1, 3) };
    const toAdd2: ImperialValue = { ft: 1, ins: 1, fr: fraction(1, 6) };
    const expected: ImperialValue = { ft: 2, ins: 2, fr: fraction(1, 2) };
    const result = add(toAdd1, toAdd2);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  test("MetricValue,MetricValue", () => {
    const toAdd: MetricValue = { m: 1, cm: 1, mm: 1 };
    const expected: MetricValue = { m: 2, cm: 2, mm: 2 };
    const result = add(toAdd, toAdd);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
