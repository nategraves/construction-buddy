import * as React from "react";

import {
  Units,
  ImperialTarget,
  ImperialValue,
  MetricValue,
  MetricTarget,
} from "../types";

interface Value {
  [Units.imperial]: ImperialValue;
  [Units.metric]: MetricValue;
}

interface ValueContextProps {
  mode: Units;
  value: Value;
  setValue: (value: Value) => void;
  toggleValueMode: () => void;
}

export const defaultValue = {
  [Units.imperial]: {
    [ImperialTarget.ft]: 0,
    [ImperialTarget.in]: 0,
    [ImperialTarget.fi]: 0,
  },
  [Units.metric]: {
    [MetricTarget.m]: 0,
    [MetricTarget.cm]: 0,
    [MetricTarget.mm]: 0,
  },
};

export const ValueContext = React.createContext<ValueContextProps>({
  mode: Units.imperial,
  value: defaultValue,
  setValue: (value: Value) => {},
  toggleValueMode: () => {},
});
