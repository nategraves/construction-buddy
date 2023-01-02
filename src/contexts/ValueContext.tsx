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
  TotalUnits,
  Units,
  DisplayValue,
  ImperialValue,
  MetricValue,
} from "../types";
import type { Value } from "../data/Value";

export type ToProcess = (ImperialValue | MetricValue | number)[];
export type Input = Maybe<number | [number] | [number, number]>;

interface ValueContextProps {
  displayValue: DisplayValue;
  inputString: Maybe<string>;
  input: Maybe<number>;
  workingValue: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  toProcess: ToProcess;
  totalUnits: Maybe<TotalUnits>;
  totalValue: Maybe<Value>;
  units: Maybe<Units>;
  addToProcess: (newToProcess?: Value) => void;
  setDisplayValue: (newDisplayValue: DisplayValue) => void;
  setInputString: (newInputString?: string) => void;
  setInput: (newInput?: Maybe<number>) => void;
  updateMode: (newMode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setWorkingValue: (newStored?: Value) => void;
  setToProcess: (newToProcess?: ToProcess) => void;
  setTotalUnits: (newTotalUnits?: TotalUnits) => void;
  setTotalValue: (newTotal?: Value) => void;
  setUnits: (newUnits: Units) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  displayValue: DisplayValue.input,
  inputString: undefined,
  input: undefined,
  mode: undefined,
  resolution: undefined,
  workingValue: undefined,
  toProcess: [],
  totalUnits: undefined,
  totalValue: undefined,
  units: Units.imperial,
  addToProcess: () => {},
  setDisplayValue: () => {},
  setInputString: () => {},
  setInput: () => {},
  updateMode: () => {},
  setResolution: () => {},
  setWorkingValue: () => {},
  setToProcess: () => {},
  setTotalUnits: () => {},
  setTotalValue: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<DisplayValue>(
    DisplayValue.input
  );
  const [inputString, setInputString] = useState<Maybe<string>>("");
  const [input, setInput] = useState<Maybe<number>>();
  const [workingValue, setWorkingValue] = useState<Maybe<Value>>();
  const [toProcess, setToProcess] = useState<ToProcess>([]);
  const [totalUnits, setTotalUnits] = useState<Maybe<TotalUnits>>();
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
    console.log({ inputString });
    console.log({ workingValue });
    console.log({ toProcess });
    console.log({ totalValue });
    if (inputString != null && inputString !== "") {
      const newInput = parseFloat(inputString);
      console.log({ input: newInput });
      setInput(newInput);
    }
  }, [inputString, workingValue, toProcess, totalValue]);

  const addToProcess = (newToProcess: Value) =>
    setToProcess([...toProcess, newToProcess]);

  return (
    <ValueContext.Provider
      value={{
        displayValue,
        inputString,
        input,
        mode,
        resolution,
        workingValue,
        toProcess,
        totalUnits,
        totalValue,
        units,
        addToProcess,
        setDisplayValue,
        setInputString,
        setInput,
        updateMode,
        setResolution,
        setWorkingValue,
        setToProcess,
        setTotalUnits,
        setTotalValue,
        setUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
