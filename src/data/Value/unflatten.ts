import { closestTapeMeasure } from "utils";
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
    let ft = includeFt ? Math.floor(value / 12) : null;
    let ins = includeFt ? value - ft * 12 - decimal : value - decimal;

    if (ins < 0) {
      ft -= 1;
      ins *= -1;
    }

    return {
      ...(ft != null ? { ft } : {}),
      ins,
      fr: closestTapeMeasure({ decimal }),
    };
  } else if (units === Units.metric) {
    const m = includeM ? Math.round(value / 100) : null;
    const cm = includeM ? value - m * 100 - decimal : value - decimal;
    const mm = Math.round(decimal * 10);

    return {
      ...(m != null ? { m } : {}),
      cm,
      mm,
    };
  }
};
