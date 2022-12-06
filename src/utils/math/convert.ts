import {
  ImperialTarget,
  MetricTarget,
  ImperialValue,
  MetricValue,
} from "../../types";
import { isMetric } from "../types";

type EitherValue = ImperialValue | MetricValue;

const conversions = {
  [MetricTarget.m]: 3.28, // To feet
  [MetricTarget.cm]: 0.39, // To inches
  [MetricTarget.mm]: 0.039, // To inches
  [ImperialTarget.ft]: 0.3, // To meters
  [ImperialTarget.in]: 2.54, // To cm/mm
};

export const convert = (value: EitherValue) => {
  let newValue: EitherValue;

  if (isMetric(value)) {
    newValue[ImperialTarget.ft] = (value.m ?? 0) * conversions[MetricTarget.m];
    let inches = (value.cm ?? 0) * conversions[MetricTarget.cm];
    inches += (value.mm ?? 0) * conversions[MetricTarget.mm];
    newValue[ImperialTarget.in] = inches;
    // newValue[ImperialTarget.n] =
    // newValue[ImperialTarget.d] =
    return newValue as ImperialValue;
  }

  newValue[MetricTarget.m] = (value.ft ?? 0) * conversions[ImperialTarget.ft];
  newValue[MetricTarget.cm] = (value.in ?? 0) * conversions[ImperialTarget.in];
  if (typeof value.n === "number" && typeof value.d === "number") {
    newValue[MetricTarget.mm] =
      (value.n / value.d) * conversions[ImperialTarget.in] * 10;
  }

  return newValue as MetricValue;
};
