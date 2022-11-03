import { Value } from "../types";

export function isImperial(value: Value): boolean {
  if (typeof value === "number") {
    return false;
  }

  return "ft" in value || "in" in value || "num" in value || "den" in value;
}

export function isMetric(value: Value) {
  if (typeof value === "number") {
    return String(value);
  }

  return "m" in value || "cm" in value || "mm" in value;
}
