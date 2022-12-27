import { Units } from "../../../types";
import { unflatten } from "../unflatten";
import { ImperialValue } from "../ImperialValue";
import { MetricValue } from "../MetricValue";

describe("unflatten correctly converts", () => {
  test("30ins to 2ft-6ins including feet", () => {
    const value = 30;
    const result: ImperialValue = { ft: 2, ins: 6 };
    expect(
      JSON.stringify(
        unflatten({ value, units: Units.imperial, includeFt: true })
      )
    ).toBe(JSON.stringify(result));
  });
  test("111.1cm to 1m-11cm-1mm including meters", () => {
    const value = 111.1;
    const result: MetricValue = { m: 1, cm: 11, mm: 1 };
    expect(unflatten({ value, units: Units.metric, includeM: true })).toBe(
      result
    );
  });
});
