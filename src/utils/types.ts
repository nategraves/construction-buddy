import { ImperialValue, MetricValue, Value } from "../types";

export function isImperial(value: Value): value is ImperialValue {
  if (typeof value === "number") {
    return false;
  }

  return "ft" in value || "in" in value || "num" in value || "den" in value;
}

export function isMetric(value: Value): value is MetricValue {
  if (typeof value === "number") {
    return false;
  }

  return "m" in value || "cm" in value || "mm" in value;
}
