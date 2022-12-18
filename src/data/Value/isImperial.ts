import { ImperialValue } from "./ImperialValue";
import { Value } from "./Value";

export function isImperial(value: Maybe<Value>): value is ImperialValue {
  if (value == null || typeof value === "number") {
    return false;
  }
  return "ft" in value || "in" in value || "num" in value || "den" in value;
}
