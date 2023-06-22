import { MetricTarget } from './MetricTarget';

export type MetricValue = {
  [MetricTarget.m]?: number;
  [MetricTarget.cm]?: number;
  [MetricTarget.mm]?: number;
};
