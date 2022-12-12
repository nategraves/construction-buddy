declare global {
  type Maybe<T> = T | undefined | null;
}

export enum MetricTarget {
  m = "m",
  cm = "cm",
  mm = "mm",
}

export enum ImperialTarget {
  ft = "ft",
  in = "in",
  n = "n",
  d = "d",
}

export type ValueTarget = MetricTarget | ImperialTarget;

export enum Mode {
  addition = "addition",
  pitch = "pitch",
}

export enum Units {
  metric = "metric",
  imperial = "imperial",
}

export type MetricValue = {
  [MetricTarget.m]?: Maybe<number>;
  [MetricTarget.cm]?: Maybe<number>;
  [MetricTarget.mm]?: Maybe<number>;
};

export type ImperialValue = {
  [ImperialTarget.ft]?: Maybe<number>;
  [ImperialTarget.in]?: Maybe<number>;
  [ImperialTarget.n]?: Maybe<number>;
  [ImperialTarget.d]?: Maybe<number>;
};

export type Value = number | MetricValue | ImperialValue;
