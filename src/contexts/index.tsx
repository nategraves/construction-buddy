import React, { createContext, FC, ReactNode, useState, useEffect } from 'react';

import {
  Mode,
  Resolution,
  TotalUnits,
  Units,
  DisplayValue,
  RightAngle,
  EmptyRightAngle,
  ImperialValue,
  isImperial,
  isMetric,
  isNumber,
  isSame,
  MetricValue,
  modeMap,
  Value,
} from 'src/data';

export type ToProcess = (ImperialValue | MetricValue | number)[];
export type Input = number | [number] | [number, number] | undefined;

interface ValueContextProps {
  displayValue: DisplayValue;
  error: string | undefined;
  inputString: string | undefined;
  input: number | undefined;
  workingValue: Value | undefined;
  memory: Value[];
  mode: Mode | undefined;
  resolution: Resolution;
  rightAngle: RightAngle;
  toProcess: ToProcess;
  totalUnits: TotalUnits | undefined;
  totalValue: Value | undefined;
  units: Units | undefined;
  addMemory: (newValue: Value) => Value[];
  addToProcess: (newToProcess: Value) => void;
  recallMemory: () => Value | undefined;
  setDisplayValue: (newDisplayValue: DisplayValue) => void;
  setError: (newError: string | undefined) => void;
  setInputString: (newInputString?: string) => void;
  setInput: (newInput?: number | undefined) => void;
  setMemory: (newMemory?: Value[]) => void;
  setResolution: (newResolution?: Resolution) => void;
  setRightAngle: (newRightAngle: RightAngle) => void;
  setToProcess: (newToProcess?: ToProcess) => void;
  setTotalUnits: (newTotalUnits?: TotalUnits) => void;
  setTotalValue: (newTotal?: Value) => void;
  setUnits: (newUnits: Units) => void;
  setWorkingValue: (newStored?: Value) => void;
  updateMode: (newMode?: Mode | undefined) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  displayValue: DisplayValue.input,
  error: undefined,
  inputString: undefined,
  input: undefined,
  memory: [],
  mode: undefined,
  resolution: Resolution.sixteenth,
  rightAngle: EmptyRightAngle,
  workingValue: undefined,
  toProcess: [],
  totalUnits: undefined,
  totalValue: undefined,
  units: Units.imperial,
  addMemory: (newValue) => [],
  addToProcess: () => {},
  recallMemory: () => 0,
  setDisplayValue: () => {},
  setError: () => {},
  setInputString: () => {},
  setInput: () => {},
  setMemory: () => {},
  setResolution: () => {},
  setRightAngle: (newRightAngle) => {},
  setWorkingValue: () => {},
  setToProcess: () => {},
  setTotalUnits: () => {},
  setTotalValue: () => {},
  setUnits: () => {},
  updateMode: () => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<DisplayValue>(DisplayValue.input);
  const [error, setError] = useState<string | undefined>();
  const [inputString, setInputString] = useState<string | undefined>('');
  const [input, setInput] = useState<number | undefined>();
  const [memory, _setMemory] = useState<Value[]>([]);
  const [mode, setMode] = useState<Mode | undefined>();
  const [workingValue, setWorkingValue] = useState<Value | undefined>();
  const [resolution, _setResolution] = useState<Resolution>(Resolution.sixteenth);
  const [rightAngle, setRightAngle] = useState<RightAngle>(EmptyRightAngle);
  const [toProcess, _setToProcess] = useState<ToProcess>([]);
  const [totalUnits, setTotalUnits] = useState<TotalUnits | undefined>();
  const [totalValue, setTotalValue] = useState<Value | undefined>();
  const [units, setUnits] = useState<Units | undefined>(Units.imperial);

  const addMemory = (newValue: Value) => {
    _setMemory([...memory, newValue]);
    return memory;
  };

  const setMemory = (newMemory?: Value[]) => {
    if (newMemory == null) {
      _setMemory([]);
    } else {
      _setMemory(newMemory);
    }
  };

  const setResolution = (newResolution?: Resolution) => {
    _setResolution(newResolution ?? Resolution.sixteenth);
  };

  const recallMemory = () => {
    const memoryDup = [...memory];
    const lastMemory = memoryDup.pop();
    _setMemory(memoryDup);
    return lastMemory;
  };

  useEffect(() => {
    console.log({ inputString });
    console.log({ workingValue });
    console.log({ toProcess });
    console.log({ totalValue });
    console.log({ rightAngle });
    if (inputString != null && inputString !== '') {
      const newInput = parseFloat(inputString);
      console.log({ input: newInput });
      setInput(newInput);
    } else {
      setInput(undefined);
    }
  }, [inputString, workingValue, toProcess, totalValue, rightAngle]);

  const addToProcess = (newToProcess: Value) => _setToProcess([...toProcess, newToProcess]);

  const setToProcess = (newToProcess?: ToProcess) => {
    if (newToProcess == null) {
      _setToProcess([]);
    } else {
      _setToProcess(newToProcess);
    }
  };

  const updateMode = (newMode?: Mode) => {
    switch (mode) {
      case Mode.add:
        if (input == null && workingValue == null && totalValue != null) {
          addToProcess(totalValue);
          setTotalValue(undefined);
          return;
        }

        const [firstToProcess] = toProcess;

        const shouldAddNumber =
          isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
        const shouldAddImperial =
          isImperial(workingValue) && (firstToProcess == null || isImperial(firstToProcess));
        const shouldAddMetric =
          isMetric(workingValue) && (firstToProcess == null || isMetric(firstToProcess));

        if (shouldAddNumber) {
          addToProcess(input);
          setInputString(undefined);
          return;
        }

        if (shouldAddImperial || shouldAddMetric) {
          addToProcess(workingValue);
          setWorkingValue(undefined);
        }

        break;
      case Mode.divide:
        if (input == null && workingValue == null && totalValue != null) {
          addToProcess(totalValue);
          setTotalValue(undefined);
          return;
        }

        const [firstToDivide] = toProcess;

        const shouldDivideNumber =
          isNumber(input) && (firstToDivide == null || isNumber(firstToDivide));
        const shouldDivideImperial =
          isImperial(workingValue) && (firstToDivide == null || isImperial(firstToDivide));
        const shouldDivideMetric =
          isMetric(workingValue) && (firstToDivide == null || isMetric(firstToDivide));

        if (shouldDivideNumber) {
          addToProcess(input);
          setInputString(undefined);
          return;
        }

        if (shouldDivideImperial || shouldDivideMetric) {
          addToProcess(workingValue);
          setWorkingValue(undefined);
        }
        break;
      case Mode.equals:
        let process = [...toProcess];

        if (workingValue) {
          if (process.length && isSame(workingValue, process[0])) {
            process = [...process, workingValue];
          } else {
            process = [workingValue];
          }
          setWorkingValue(undefined);
        }

        if (!process.length) {
          throw new Error(`Unable to apply '${mode}' because toProcess is empty`);
        }

        const initial = process.shift();

        if (process.length === 0 && input == null && workingValue == null) {
          console.warn('Only 1 value in toProcess. Setting as total');
          setTotalValue(initial);
        } else if (process.length === 0 && input != null && initial != null) {
          const total = modeMap[mode as Mode]({ value: initial, toApply: input });
          setInputString(undefined);
          setTotalValue(total);
        } else if (toProcess.length === 0 && workingValue != null && initial != null) {
          const total = modeMap[mode as Mode]({
            value: initial,
            toApply: workingValue,
          });
          setWorkingValue(undefined);
          setTotalValue(total);
        } else {
          console.warn({ initial, toProcess, mode, input });
          // const total = toProcess.reduce((sum, value) => {
          //   const newSum = modeMap[mode]({ value: sum, toApply: value });
          //   return newSum;
          // }, initial);
          // setTotalValue(total);
        }

        setToProcess([]);
        break;
      case Mode.multiply:
        // If there's input and we have a working value, assume
        // that we're filling in the next empty measurement
        const fillNextMeasurement = inputString != null && workingValue != null;
        const fillInches =
          fillNextMeasurement &&
          isImperial(workingValue) &&
          workingValue.ft != null &&
          workingValue.ins == null;
        const fillCm =
          fillNextMeasurement &&
          isMetric(workingValue) &&
          workingValue.m != null &&
          workingValue.cm == null;
        const fillMm =
          fillNextMeasurement &&
          isMetric(workingValue) &&
          workingValue.m != null &&
          workingValue.cm != null &&
          workingValue.mm == null;

        if (fillInches) {
          setWorkingValue({ ...workingValue, ...(input ? { ins: input } : {}) });
        } else if (fillCm) {
          setWorkingValue({ ...workingValue, ...(input ? { cm: input } : {}) });
        } else if (fillMm) {
          setWorkingValue({ ...workingValue, ...(input ? { mm: input } : {}) });
        }
        if (inputString == null && workingValue == null && totalValue != null) {
          addToProcess(totalValue);
          setTotalValue(undefined);
          return;
        }

        const [firstToMultiply] = toProcess;

        const shouldMultiplyNumber =
          isNumber(input) && (firstToMultiply == null || isNumber(firstToMultiply));
        const shouldMultiplyImperial =
          isImperial(workingValue) && (firstToMultiply == null || isImperial(firstToMultiply));
        const shouldMultiplyMetric =
          isMetric(workingValue) && (firstToMultiply == null || isMetric(firstToMultiply));

        if (shouldMultiplyNumber) {
          addToProcess(input);
          setInputString(undefined);
          return;
        }

        if (shouldMultiplyImperial || shouldMultiplyMetric) {
          addToProcess(workingValue);
          setWorkingValue(undefined);
        }
        break;

      default:
        console.log({ newMode });
        break;
    }
    setMode(newMode);
  };

  return (
    <ValueContext.Provider
      value={{
        displayValue,
        error,
        inputString,
        input,
        memory,
        mode,
        resolution,
        rightAngle,
        workingValue,
        toProcess,
        totalUnits,
        totalValue,
        units,
        addMemory,
        addToProcess,
        recallMemory,
        setDisplayValue,
        setError,
        setInputString,
        setInput,
        setMemory,
        setResolution,
        setRightAngle,
        setToProcess,
        setTotalUnits,
        setTotalValue,
        setUnits,
        setWorkingValue,
        updateMode,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
