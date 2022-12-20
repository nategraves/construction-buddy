import { MetricValue } from "types";

export const metricToCm = ({ m, cm, mm }: MetricValue): number => {
  return m * 100 + cm + mm * 0.1;
};
