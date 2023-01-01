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
export type Input = Maybe<number | [number] | [number, number]>;

interface ValueContextProps {
  displayValue: DisplayValue;
  inputString: Maybe<string>;
  input: Maybe<number>;
  workingValue: Maybe<Value>;
  mode: Maybe<Mode>;
  resolution: Maybe<Resolution>;
  toProcess: ToProcess;
  totalValue: Maybe<Value>;
  units: Maybe<Units>;
  setDisplayValue: (newDisplayValue: DisplayValue) => void;
  setInputString: (newInputString?: string) => void;
  setInput: (newInput?: Maybe<number>) => void;
  updateMode: (newMode?: Mode) => void;
  setResolution: (newResolution?: Resolution) => void;
  setWorkingValue: (newStored?: Value) => void;
  setToProcess: (newToProcess?: ToProcess) => void;
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
  totalValue: undefined,
  units: Units.imperial,
  setDisplayValue: () => {},
  setInputString: () => {},
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
  const [inputString, setInputString] = useState<Maybe<string>>("");
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
    console.log({ workingValue });
    console.log({ toProcess });
    console.log({ totalValue });
    if (inputString != null && inputString !== "") {
      const newInput = parseFloat(inputString);
      console.log({ input: newInput });
      setInput(newInput);
    }
  }, [inputString, workingValue, toProcess, totalValue]);

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
        totalValue,
        units,
        setDisplayValue,
        setInputString,
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
