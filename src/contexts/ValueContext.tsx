import React, { createContext, FC, ReactNode, useState } from "react";

import { Mode, Resolution, Units, Value } from "../types";

interface ValueContextProps {
  input: Maybe<number>;
  stored: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  total: Maybe<Value>;
  units: Maybe<Units>;
  setInput: (value?: number) => void;
  setMode: (mode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setStored: (newStored?: Value) => void;
  setTotal: (newTotal?: Value) => void;
  setUnits: (units: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  input: undefined,
  mode: undefined,
  resolution: undefined,
  stored: undefined,
  total: undefined,
  units: Units.imperial,
  setInput: () => {},
  setMode: () => {},
  setResolution: () => {},
  setStored: () => {},
  setTotal: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [input, setInput] = useState<Maybe<number>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [resolution, setResolution] = useState<Maybe<Resolution>>();
  const [stored, setStored] = useState<Maybe<Value>>();
  const [total, setTotal] = useState<Maybe<Value>>();
  const [units, setUnits] = useState<Maybe<Units>>();

  return (
    <ValueContext.Provider
      value={{
        input,
        mode,
        resolution,
        stored,
        total,
        units,
        setInput,
        setMode,
        setResolution,
        setStored,
        setTotal,
        setUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
