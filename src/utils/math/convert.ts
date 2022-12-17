import {
  ImperialTarget,
  MetricTarget,
  Value,
  // ImperialValue,
  // MetricValue,
} from "../../types";
// import { isImperial, isMetric } from "../types";

const conversions = {
  [MetricTarget.m]: 3.28, // To feet
  [MetricTarget.cm]: 0.39, // To inches
  [MetricTarget.mm]: 0.039, // To inches
  [ImperialTarget.ft]: 0.3, // To meters
  [ImperialTarget.ins]: 2.54, // To cm/mm
};

export const convert = (value: Value, resolution: number) => {
  // if (isMetric(value)) {
  //   const newValue = ImperialValue({
  //     ft: (value.m ?? 0) * conversions[MetricTarget.m],
  //     ins:
  //       (value.cm ?? 0) * conversions[MetricTarget.cm] +
  //       (value.mm ?? 0) * conversions[MetricTarget.mm],
  //     n: undefined,
  //   });
  //   return newValue;
  // }

  // if (isImperial(value)) {
  //   const newValue = MetricValue({
  //     m: (value.ft ?? 0) * conversions[ImperialTarget.ft],
  //     cm: (value.ins ?? 0) * conversions[ImperialTarget.ins],
  //     mm: (value.n / resolution ?? 0) * conversions[ImperialTarget.ins],
  //   });
  //   return newValue;
  // }
  console.log(conversions);
};
