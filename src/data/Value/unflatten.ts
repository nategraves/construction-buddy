import { fraction } from "mathjs";
import { Units } from "../../types";
import { ImperialValue } from "./ImperialValue";
import { MetricValue } from "./MetricValue";

interface UnflattenImperial {
  value: number;
  units: Units.imperial;
  includeFt?: boolean;
  includeM?: never;
}

interface UnflattenMetric {
  value: number;
  units: Units.metric;
  includeFt?: never;
  includeM?: boolean;
}

export const unflatten = ({
  value,
  units,
  includeFt,
  includeM,
}: UnflattenImperial | UnflattenMetric): ImperialValue | MetricValue => {
  const decimal = value % 1;
  if (units === Units.imperial) {
    const ft = includeFt ? Math.round(value / 12) : null;
    const ins = includeFt ? value - ft * 12 - decimal : value - decimal;
    const fr = fraction(decimal);
    return {
      ...(ft ? { ft } : {}),
      ins,
      fr,
    };
  } else if (units === Units.metric) {
    const m = Math.round(value / 100);
    const cm = value % 100;

    return {
      m,
      cm,
      mm: decimal,
    };
  }
};
