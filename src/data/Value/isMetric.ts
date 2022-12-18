import { MetricValue } from "./MetricValue";
import { Value } from "./Value";

export function isMetric(value: Maybe<Value>): value is MetricValue {
  if (value == null || typeof value === "number") {
    return false;
  }

  return "m" in value || "cm" in value || "mm" in value;
}
