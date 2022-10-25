import * as React from "react";

import {
  ImperialTarget,
  ImperialValue,
  MetricTarget,
  MetricValue,
  ValueMode,
  ValueTarget,
} from "../types";

interface Value {
  [ValueMode.imperial]: ImperialValue;
  [ValueMode.metric]: MetricValue;
}

interface ValueContextProps {
  mode: ValueMode;
  value: Value;
  valueTarget: Maybe<ValueTarget>;
  valueTargetless: Maybe<number>;
  setValue: (value: Value) => void;
  setValueTarget: (valueTarget: ValueTarget) => void;
  setValueTargetless: (value: number) => void;
  toggleValueMode: () => void;
}

export const defaultValue = {
  [ValueMode.imperial]: {
    [ImperialTarget.ft]: 0,
    [ImperialTarget.in]: 0,
    [ImperialTarget.fi]: 0,
  },
  [ValueMode.metric]: {
    [MetricTarget.m]: 0,
    [MetricTarget.cm]: 0,
    [MetricTarget.mm]: 0,
  },
};

export const ValueContext = React.createContext<ValueContextProps>({
  mode: ValueMode.imperial,
  value: defaultValue,
  valueTarget: undefined,
  valueTargetless: undefined,
  setValue: (value) => {},
  setValueTarget: (valueTarget) => {},
  setValueTargetless: (value) => {},
  toggleValueMode: () => {},
});
