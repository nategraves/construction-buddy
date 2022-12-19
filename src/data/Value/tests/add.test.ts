import { add } from "../add";
import { ImperialValue } from "../ImperialValue";

describe("Add correctly adds", () => {
  test("number, number", () => {
    expect(1).toBe(1);
    const expected = 2;
    const result = add(1, 1);
    expect(result).toBe(expected);
  });

  test("ImperialValue,ImperialValue", () => {
    const expected: ImperialValue = { ft: 2, ins: 2, n: 2, d: 16 };
    const toAdd: ImperialValue = { ft: 1, ins: 1, n: 1, d: 16 };
    const result = add(toAdd, toAdd);
    console.log(result);
    expect(result).toBe(expected);
  });
});
