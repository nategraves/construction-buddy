import { MetricTarget } from "./MetricTarget";

export type MetricValue = {
  [MetricTarget.m]?: Maybe<number>;
  [MetricTarget.cm]?: Maybe<number>;
  [MetricTarget.mm]?: Maybe<number>;
};
