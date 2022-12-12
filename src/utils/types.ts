import { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units, Value, MetricValue, ImperialValue, Resolution } from "../types";

export function useResolution(): Resolution {
  const { resolution } = useContext(ValueContext);
  return resolution;
}

export function useIsImperial(): boolean {
  const { units } = useContext(ValueContext);
  return units === Units.imperial;
}

export function useIsMetric(): boolean {
  const { units } = useContext(ValueContext);
  return units === Units.metric;
}

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
