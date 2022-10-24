declare global {
  type Maybe<T> = T | undefined | null;
}

export enum CalculatorMode {
  pitch = "pitch",
}

export enum ValueMode {
  metric = "metric",
  imperial = "imperial",
}

export type MetricValue = {
  m: number;
  cm: number;
  mm: number;
};

export type ImperialValue = {
  ft: number;
  in: number;
  fi: number;
};
