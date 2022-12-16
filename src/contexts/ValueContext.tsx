import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from "react";

import { Mode, Resolution, Units, Value, DisplayValue } from "../types";

interface ValueContextProps {
  displayValue: DisplayValue;
  input: Maybe<number>;
  stored: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  total: Maybe<Value>;
  units: Maybe<Units>;
  setDisplayValue: (displayValue: DisplayValue) => void;
  setInput: (value?: number) => void;
  setMode: (mode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setStored: (newStored?: Value) => void;
  setTotal: (newTotal?: Value) => void;
  setUnits: (units: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  displayValue: DisplayValue.input,
  input: undefined,
  mode: undefined,
  resolution: undefined,
  stored: undefined,
  total: undefined,
  units: Units.imperial,
  setDisplayValue: () => {},
  setInput: () => {},
  setMode: () => {},
  setResolution: () => {},
  setStored: () => {},
  setTotal: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<DisplayValue>(
    DisplayValue.input
  );
  const [input, setInput] = useState<Maybe<number>>();
  const [stored, setStored] = useState<Maybe<Value>>();
  const [total, setTotal] = useState<Maybe<Value>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [resolution, setResolution] = useState<Maybe<Resolution>>();
  const [units, setUnits] = useState<Maybe<Units>>();

  useEffect(() => {
    console.log({ input });
    console.log({ stored });
    console.log({ total });
  }, [input, stored, total]);

  return (
    <ValueContext.Provider
      value={{
        displayValue,
        input,
        mode,
        resolution,
        stored,
        total,
        units,
        setDisplayValue,
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
