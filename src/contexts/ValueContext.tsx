import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";

import {
  ImperialTarget,
  ImperialValue,
  MetricTarget,
  MetricValue,
  Mode,
  Units,
  Value,
} from "../types";

interface ValueContextProps {
  input: Maybe<number>;
  stored: Maybe<Value>;
  mode: Maybe<Mode>;
  total: Maybe<Value>;
  units: Maybe<Units>;
  setInput: (value: number) => void;
  setStored: (inputValue: ImperialValue | MetricValue) => void;
  setMode: (mode: Mode) => void;
  setTotal: (totalValue: ImperialValue | MetricValue) => void;
  toggleUnits: () => void;
}

export const defaultValue = {
  [Units.imperial]: {
    [ImperialTarget.ft]: undefined,
    [ImperialTarget.in]: undefined,
    n: undefined,
    d: undefined,
  },
  [Units.metric]: {
    [MetricTarget.m]: undefined,
    [MetricTarget.cm]: undefined,
    [MetricTarget.mm]: undefined,
  },
};

export const ValueContext = createContext<ValueContextProps>({
  input: undefined,
  stored: undefined,
  mode: undefined,
  total: undefined,
  units: Units.imperial,
  setInput: () => {},
  setStored: () => {},
  setMode: () => {},
  setTotal: () => {},
  toggleUnits: () => {},
});

export const ValueProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState<Maybe<number>>();
  const [stored, setStored] = useState<Maybe<ImperialValue | MetricValue>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [total, setTotal] = useState<Maybe<Value>>();
  const [units, setUnits] = useState(Units.imperial);

  const toggleUnits = () =>
    setUnits(units === Units.imperial ? Units.metric : Units.imperial);

  useEffect(() => {
    if (mode == null) {
      return;
    }

    if (mode === Mode.addition) {
      if (input == null || stored == null) {
        return;
      }
    }
  }, [input, mode]);

  return (
    <ValueContext.Provider
      value={{
        input,
        stored,
        mode,
        total,
        units,
        setInput,
        setStored,
        setMode,
        setTotal,
        toggleUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
