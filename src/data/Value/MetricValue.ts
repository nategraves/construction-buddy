import { MetricTarget } from '~/types';

export type MetricValue = {
  [MetricTarget.m]?: number;
  [MetricTarget.cm]?: number;
  [MetricTarget.mm]?: number;
};
