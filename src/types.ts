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
  fi = "fi",
}

export enum CalculatorMode {
  pitch = "pitch",
}

export enum ValueMode {
  metric = "metric",
  imperial = "imperial",
}

export type MetricValue = {
  [MetricTarget.m]: number;
  [MetricTarget.cm]: number;
  [MetricTarget.mm]: number;
};

export type ImperialValue = {
  [ImperialTarget.ft]: number;
  [ImperialTarget.in]: number;
  [ImperialTarget.fi]: number;
};
