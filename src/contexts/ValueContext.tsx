import React, { createContext, FC, ReactNode, useState } from "react";

import { Mode, Units } from "../types";

interface ValueContextProps {
  input: Maybe<number>;
  mode: Maybe<Mode>;
  stored: Maybe<number>;
  total: Maybe<number>;
  units: Maybe<Units>;
  setInput: (value?: number) => void;
  setMode: (mode?: Mode) => void;
  setStored: (newStored?: number) => void;
  setTotal: (newTotal?: number) => void;
  setUnits: (units: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  input: undefined,
  mode: undefined,
  stored: undefined,
  total: undefined,
  units: Units.imperial,
  setInput: () => {},
  setMode: () => {},
  setStored: () => {},
  setTotal: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState<Maybe<number>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [stored, setStored] = useState<Maybe<number>>();
  const [total, setTotal] = useState<Maybe<number>>();
  const [units, setUnits] = useState<Maybe<Units>>();

  return (
    <ValueContext.Provider
      value={{
        input,
        mode,
        stored,
        total,
        units,
        setInput,
        setMode,
        setStored,
        setTotal,
        setUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
