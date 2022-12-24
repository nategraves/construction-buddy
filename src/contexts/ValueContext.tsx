import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from "react";

import {
  Mode,
  Resolution,
  Units,
  DisplayValue,
  ImperialValue,
  MetricValue,
} from "../types";
import type { Value } from "../data/Value";
import {} from "../data";

type ToProcess = ImperialValue[] | MetricValue[] | number[];

interface ValueContextProps {
  displayValue: DisplayValue;
  input: Maybe<number>;
  stored: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  toProcess: Maybe<ToProcess>;
  total: Maybe<Value>;
  units: Maybe<Units>;
  setDisplayValue: (displayValue: DisplayValue) => void;
  setInput: (value?: number) => void;
  updateMode: (mode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setStored: (newStored?: Value) => void;
  setToProcess: (newToProcess?: ToProcess) => void;
  setTotal: (newTotal?: Value) => void;
  setUnits: (units: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  displayValue: DisplayValue.input,
  input: undefined,
  mode: undefined,
  resolution: undefined,
  stored: undefined,
  toProcess: [],
  total: undefined,
  units: Units.imperial,
  setDisplayValue: () => {},
  setInput: () => {},
  updateMode: () => {},
  setResolution: () => {},
  setStored: () => {},
  setToProcess: () => {},
  setTotal: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<DisplayValue>(
    DisplayValue.input
  );
  const [input, setInput] = useState<Maybe<number>>();
  const [stored, setStored] = useState<Maybe<Value>>();
  const [toProcess, setToProcess] = useState<ToProcess>();
  const [total, setTotal] = useState<Maybe<Value>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [resolution, setResolution] = useState<Maybe<Resolution>>();
  const [units, setUnits] = useState<Maybe<Units>>();

  const updateMode = (newMode: Mode) => {
    switch (mode) {
      case Mode.add:
        // setTotal(toProcess.reduce((total, value) => {
        //   return
        // });
        // if (isImperial(total) && isImperial(stored)) {
        //   console.log("Adding imperials");
        //   const newTotal = add(total, stored);
        //   console.log({ newTotal });
        //   setTotal(newTotal);
        //   setStored();
        // }

        // if (isMetric(total) && isMetric(stored)) {
        //   console.log("Adding metrics");
        //   setTotal(add(total, stored));
        //   setStored();
        // }

        // if (isNumber(stored) && isNumber(input)) {
        //   console.log("Adding numbers");
        //   setTotal(input + stored);
        //   setStored();
        //   setInput();
        // }

        break;
      default:
        break;
    }
    console.log(newMode);
    setMode(newMode);
  };

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
        toProcess,
        total,
        units,
        setDisplayValue,
        setInput,
        updateMode,
        setResolution,
        setStored,
        setToProcess,
        setTotal,
        setUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
