export enum CalculatorMode {
  pitch = "pitch",
}

export type MetricValue = {
  km: number;
  m: number;
  cm: number;
  mm: number;
};

export type ImperialValue = {
  ft: number;
  in: number;
  th: number;
};

// type Maybe<T> = T | undefined | null;
