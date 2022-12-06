import React, { createContext, FC, ReactNode, useState } from "react";

import {
  ImperialTarget,
  ImperialValue,
  MetricTarget,
  MetricValue,
  Units,
  Value,
} from "../types";

interface ValueContextProps {
  input: Maybe<number>;
  stored: Maybe<number>;
  total: Maybe<number>;
  units: Maybe<Units>;
  setInput: (value: number) => void;
  setStored: (newStored: number) => void;
  setTotal: (newTotal: number) => void;
  toggleUnits: () => void;
}

export const ValueContext = createContext<ValueContextProps>({
  input: undefined,
  stored: undefined,
  total: undefined,
  units: Units.imperial,
  setInput: () => {},
  setStored: () => {},
  setTotal: () => {},
  toggleUnits: () => {},
});

export const ValueProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState<Maybe<number>>();
  const [stored, setStored] = useState<Maybe<number>>();
  const [total, setTotal] = useState<Maybe<number>>();
  const [units, setUnits] = useState(Units.imperial);

  const toggleUnits = () => {
    const factor = units === Units.imperial ? 2.54 : 0.393701;
    if (stored != null) {
      setStored(stored * factor);
    }
    if (total != null) {
      setTotal(total * factor);
    }

    setUnits(units === Units.imperial ? Units.metric : Units.imperial);
  };

  return (
    <ValueContext.Provider
      value={{
        input,
        stored,
        total,
        units,
        setInput,
        setStored,
        setTotal,
        toggleUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
