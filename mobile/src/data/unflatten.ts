import { Fraction, Units } from 'src/data';
import { ImperialValue } from './types/ImperialValue';
import { MetricValue } from './types/MetricValue';

export const unflatten = ({
  value,
  units,
  includeFt,
  includeM,
}: {
  value: number;
  units: Units;
  includeFt?: boolean;
  includeM?: boolean;
}): ImperialValue | MetricValue => {
  const decimal = value % 1;

  if (units === Units.imperial) {
    let ft = includeFt ? Math.floor(value / 12) : null;
    let ins = includeFt ? value - (ft ?? 0) * 12 - decimal : value - decimal;

    if (ins < 0 && ft != null) {
      ft -= 1;
      ins *= -1;
    }

    return {
      ...(ft != null ? { ft } : {}),
      ins,
      fr: Fraction.closestTapeMeasure(decimal),
    };
  }
  const m = includeM ? Math.round(value / 100) : null;
  const cm = includeM ? value - (m ?? 0) * 100 - decimal : value - decimal;
  const mm = Math.round(decimal * 10);

  return {
    ...(m != null ? { m } : {}),
    cm,
    mm,
  };
};
