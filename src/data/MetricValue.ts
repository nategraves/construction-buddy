import { MetricTarget } from './MetricTarget';

export type TMetricValue = {
  [MetricTarget.m]?: number;
  [MetricTarget.cm]?: number;
  [MetricTarget.mm]?: number;
};

export const MetricValue = ({ m: _m, cm: _cm, mm: _mm }: TMetricValue) => {
  let m = _m;
  let cm = _cm;
  let mm = _mm;

  const simplify = (value: TMetricValue): TMetricValue => {
    // Convert millimeters to centimeters and millimeters
    let cm = Math.floor((value.mm ?? 0) / 10);
    let mm = (value.mm ?? 0) % 10;

    // Convert centimeters to meters and centimeters
    let m = Math.floor((value.cm ?? 0) / 100);
    cm = (value.cm ?? 0) % 100;

    // Add the meters, centimeters, and millimeters to the value's meters, centimeters, and millimeters
    let newM = (value.m ?? 0) + m;
    let newCm = cm;
    let newMm = mm;

    return MetricValue({ m: newM, cm: newCm, mm: newMm });
  };

  const flatten = (metricValue: TMetricValue): number => {
    const ftIns = (metricValue.m ?? 0) * 12;
    const ins = metricValue.cm ?? 0;
    const fr = metricValue.mm ?? 0.0;
    return ftIns + ins + fr;
  };

  const add = (value: TMetricValue) => {
    var newM = (m ?? 0) + (value.m ?? 0);
    var newCm = (cm ?? 0) + (value.cm ?? 0);
    var newMm = (mm ?? 0) + (value.mm ?? 0);
    return simplify(MetricValue({ m: newM, cm: newCm, mm: newMm }));
  };

  const unflatten = (value: number, includeM: boolean) => {
    const decimal = value % 1;

    const newM = includeM ? value / 100.0 : undefined;
    const newCm = includeM ? value - (m ?? 0) * 100.0 - decimal : value - decimal;
    const newMm = decimal * 10.0;

    return MetricValue({ m: newM, cm: newCm, mm: newMm });
  };

  const invert = () => {
    const newM = m != null ? m * -1 : undefined;
    const newCm = cm != null ? cm! * -1 : undefined;
    const newMm = mm != null ? mm! * -1 : undefined;
    return MetricValue({ m: newM, cm: newCm, mm: newMm });
  };

  return {
    m,
    cm,
    mm,
    add,
    flatten,
    invert,
    simplify,
    unflatten,
  };
};
