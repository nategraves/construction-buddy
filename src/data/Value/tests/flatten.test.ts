import { fraction } from "mathjs";

import { flatten } from "../flatten";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("flatten correctly reduces", () => {
  test("ImperialValue to ins", () => {
    const toFlatten: ImperialValue = { ft: 1, ins: 1, fr: fraction(1, 2) };
    const result = 13.5;
    expect(flatten(toFlatten)).toBe(result);
  });
  test("MetricValue to cm", () => {
    const toFlatten: MetricValue = { m: 1, cm: 1, mm: 2 };
    const result = 101.2;
    expect(flatten(toFlatten)).toBe(result);
  });
});
