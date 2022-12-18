import { MetricTarget } from "../../types/MetricTarget";

export type MetricValue = {
  [MetricTarget.m]?: number;
  [MetricTarget.cm]?: number;
  [MetricTarget.mm]?: number;
};
