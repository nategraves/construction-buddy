import { format } from "mathjs";
import { closestTapeMeasure } from "../closestTapeMeasure";
describe("It correctly finds the closest tape measure measurement", () => {
  test("Correctly returns 1/8 for 0.125 with no resolution", () => {
    const result = closestTapeMeasure({ decimal: 0.125 });
    expect(format(result, { fraction: "ratio" })).toBe("1/8");
  });
});
