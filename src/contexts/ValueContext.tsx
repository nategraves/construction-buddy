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

export type ToProcess = (ImperialValue | MetricValue | number)[];

interface ValueContextProps {
  displayValue: DisplayValue;
  input: Maybe<number>;
  workingValue: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  toProcess: ToProcess;
  totalValue: Maybe<Value>;
  units: Maybe<Units>;
  setDisplayValue: (displayValue: DisplayValue) => void;
  setInput: (value?: number) => void;
  updateMode: (mode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setWorkingValue: (newStored?: Value) => void;
  setToProcess: (newToProcess?: ToProcess) => void;
  setTotalValue: (newTotal?: Value) => void;
  setUnits: (units: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  displayValue: DisplayValue.input,
  input: undefined,
  mode: undefined,
  resolution: undefined,
  workingValue: undefined,
  toProcess: [],
  totalValue: undefined,
  units: Units.imperial,
  setDisplayValue: () => {},
  setInput: () => {},
  updateMode: () => {},
  setResolution: () => {},
  setWorkingValue: () => {},
  setToProcess: () => {},
  setTotalValue: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<DisplayValue>(
    DisplayValue.input
  );
  const [input, setInput] = useState<Maybe<number>>();
  const [workingValue, setWorkingValue] = useState<Maybe<Value>>();
  const [toProcess, setToProcess] = useState<ToProcess>([]);
  const [totalValue, setTotalValue] = useState<Maybe<Value>>();
  const [mode, setMode] = useState<Maybe<Mode>>();
  const [resolution, setResolution] = useState<Maybe<Resolution>>();
  const [units, setUnits] = useState<Maybe<Units>>(Units.imperial);

  const updateMode = (newMode: Mode) => {
    switch (mode) {
      case Mode.add:
        // setTotalValue(toProcess.reduce((totalValue, value) => {
        //   return
        // });
        // if (isImperial(totalValue) && isImperial(workingValue)) {
        //   console.log("Adding imperials");
        //   const newTotal = add(totalValue, workingValue);
        //   console.log({ newTotal });
        //   setTotalValue(newTotal);
        //   setWorkingValue();
        // }

        // if (isMetric(totalValue) && isMetric(workingValue)) {
        //   console.log("Adding metrics");
        //   setTotalValue(add(totalValue, workingValue));
        //   setWorkingValue();
        // }

        // if (isNumber(workingValue) && isNumber(input)) {
        //   console.log("Adding numbers");
        //   setTotalValue(input + workingValue);
        //   setWorkingValue();
        //   setInput();
        // }

        break;
      default:
        break;
    }
    // console.log(newMode);
    setMode(newMode);
  };

  useEffect(() => {
    console.log({ input });
    console.log({ workingValue });
    console.log({ toProcess });
    console.log({ totalValue });
  }, [input, workingValue, toProcess, totalValue]);

  return (
    <ValueContext.Provider
      value={{
        displayValue,
        input,
        mode,
        resolution,
        workingValue,
        toProcess,
        totalValue,
        units,
        setDisplayValue,
        setInput,
        updateMode,
        setResolution,
        setWorkingValue,
        setToProcess,
        setTotalValue,
        setUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
