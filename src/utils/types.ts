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

export function isImperial(value: Maybe<Value>): value is ImperialValue {
  if (value == null || typeof value === "number") {
    return false;
  }

  return value.constructor?.name === "ImperialValue";
}

export function isMetric(value: Value): value is MetricValue {
  if (value == null || typeof value === "number") {
    return false;
  }

  return value.constructor?.name === "MetricValue";
}

export function isNumber(value: Value): value is number {
  return typeof value === "number";
}
