import { MetricTarget } from "./MetricTarget";

export type MetricValueState = {
  [MetricTarget.m]: Maybe<number>;
  [MetricTarget.cm]: Maybe<number>;
  [MetricTarget.mm]: Maybe<number>;
};

export class MetricValue {
  m: Maybe<number>;
  cm: Maybe<number>;
  mm: Maybe<number>;

  constructor({ m, cm, mm }: MetricValueState) {
    this.m = m;
    this.cm = cm;
    this.mm = mm;
  }

  add = (value: MetricValue) => {
    this.m = this.m ?? 0 + value.m ?? 0;
    this.cm = this.cm ?? 0 + value.cm ?? 0;
    this.mm = this.mm ?? 0 + value.mm ?? 0;
  };

  subtract = (value: MetricValue) => {
    this.m = this.m ?? 0 - value.m ?? 0;
    this.cm = this.cm ?? 0 - value.cm ?? 0;
    this.mm = this.mm ?? 0 - value.mm ?? 0;
  };

  multiply = (value: MetricValue) => {
    this.m = this.m ?? 0 * value.m ?? 0;
    this.cm = this.cm ?? 0 * value.cm ?? 0;
    this.mm = this.mm ?? 0 * value.mm ?? 0;
  };

  divide = (value: MetricValue) => {
    this.m = this.m ?? 0 / value.m ?? 0;
    this.cm = this.cm ?? 0 / value.cm ?? 0;
    this.mm = this.mm ?? 0 / value.mm ?? 0;
  };
}

export type TMetricValue = typeof MetricValue;
