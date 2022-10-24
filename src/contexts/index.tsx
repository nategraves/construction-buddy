import * as React from "react";

import { ValueMode, ImperialValue, MetricValue } from "../types";

interface Value {
  [ValueMode.imperial]: ImperialValue;
  [ValueMode.metric]: MetricValue;
}

interface ValueContextProps {
  mode: ValueMode;
  value: Value;
  setValue: (value: Value) => void;
  toggleValueMode: () => void;
}

export const defaultValue = {
  [ValueMode.imperial]: {
    ft: 0,
    in: 0,
    fi: 0,
  },
  [ValueMode.metric]: {
    m: 0,
    cm: 0,
    mm: 0,
  },
};

export const ValueContext = React.createContext<ValueContextProps>({
  mode: ValueMode.imperial,
  value: defaultValue,
  setValue: (value: Value) => {},
  toggleValueMode: () => {},
});
