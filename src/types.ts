declare global {
  type Maybe<T> = T | null | undefined;
}

export enum CalculatorMode {
  pitch = "pitch",
}

export type Value = {
  mode: "metric" | "standard";
  m: Maybe<number>;
  cm: Maybe<number>;
  mm: Maybe<number>;
  ft: Maybe<number>;
  in: Maybe<number>;
  fi: Maybe<number>;
  width: Maybe<number>;
  height: Maybe<number>;
  length: Maybe<number>;
};
