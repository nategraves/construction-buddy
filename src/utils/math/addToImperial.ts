import { MetricValue, ImperialValue, Resolution } from "../../types";
import { isMetric } from "../types";
import { convert } from "./convert";

export const addToImperial = ({
  value,
  toAdd: toAddInitial,
  resolution,
}: {
  value: ImperialValue;
  toAdd: MetricValue | ImperialValue;
  resolution: Resolution;
}): ImperialValue => {
  const toAdd = isMetric(toAddInitial)
    ? (convert(toAddInitial, resolution) as ImperialValue)
    : toAddInitial;

  if (toAdd.ft || value.ft) {
    value.ft = toAdd.ft ?? 0 + value.ft ?? 0;
  }

  if (toAdd.ins || value.ins) {
    value.ins = toAdd.ins ?? 0 + value.ins ?? 0;

    if (value.ins >= 12) {
      value.ft += Math.round(value.ins / 12);
      value.ins = value.ins % 12;
    }

    if (typeof toAdd.n === "number") {
      value.n = value.n ?? 0 + toAdd.n ?? 0;
    }
  }

  return value;
};
