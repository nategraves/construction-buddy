import { fraction } from "mathjs";

import { Units } from "../../../types";
import { unflatten } from "../unflatten";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("unflatten correctly converts", () => {
  test("30 to 2ft-6ins with ft", () => {
    const value = 30;
    const result: ImperialValue = { ft: 2, ins: 6, fr: fraction(0, 1) };
    expect(
      JSON.stringify(
        unflatten({ value, units: Units.imperial, includeFt: true })
      )
    ).toBe(JSON.stringify(result));
  });

  test("30 to 30ins without ft", () => {
    const value = 30;
    const result = { ins: 30, fr: fraction(0, 1) };
    expect(JSON.stringify(unflatten({ value, units: Units.imperial }))).toBe(
      JSON.stringify(result)
    );
  });

  test("30 to 2 ft 6ins with ft", () => {
    const value = 30;
    const result = { ft: 2, ins: 6, fr: fraction(0, 1) };
    expect(
      JSON.stringify(
        unflatten({ value, units: Units.imperial, includeFt: true })
      )
    ).toBe(JSON.stringify(result));
  });

  test("111.1 to 1m-11cm-1mm including meters", () => {
    const value = 111.1;
    const expected: MetricValue = { m: 1, cm: 11, mm: 1 };
    const result = unflatten({ value, units: Units.metric, includeM: true });
    expect(JSON.stringify(expected)).toBe(JSON.stringify(result));
  });
});
