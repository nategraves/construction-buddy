import React, { createContext, FC, ReactNode, useState, useEffect } from 'react';

import {
  Resolution,
  TotalUnits,
  Units,
  RightAngle,
  EmptyRightAngle,
  ImperialValue,
  MetricValue,
  Value,
  CalculationStep,
} from 'src/data';

export type ToProcess = (ImperialValue | MetricValue | number)[];
export type Input = number | [number] | [number, number] | undefined;

interface ValueContextProps {
  calculationSteps: CalculationStep[];
  error: string | undefined;
  inputString: string | undefined;
  input: number | undefined;
  memory: Value[];
  resolution: Resolution;
  rightAngle: RightAngle;
  totalUnits: TotalUnits | undefined;
  totalValue: Value | undefined;
  units: Units | undefined;
  workingValue: Value | undefined;
  addMemory: (newValue: Value) => Value[];
  addCalculationStep: (calculationStep: CalculationStep) => void;
  clearCalculationSteps: () => void;
  recallMemory: () => Value | undefined;
  setError: (newError: string | undefined) => void;
  setInputString: (newInputString?: string) => void;
  setInput: (newInput?: number | undefined) => void;
  setMemory: (newMemory?: Value[]) => void;
  setResolution: (newResolution?: Resolution) => void;
  setRightAngle: (newRightAngle: RightAngle) => void;
  setTotalUnits: (newTotalUnits?: TotalUnits) => void;
  setTotalValue: (newTotal?: Value) => void;
  setUnits: (newUnits: Units) => void;
  setWorkingValue: (newStored?: Value) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  calculationSteps: [],
  error: undefined,
  inputString: undefined,
  input: undefined,
  memory: [],
  resolution: Resolution.sixteenth,
  rightAngle: EmptyRightAngle,
  workingValue: undefined,
  totalUnits: undefined,
  totalValue: undefined,
  units: Units.imperial,
  addMemory: (newValue) => [],
  addCalculationStep: (calculationStep) => {},
  clearCalculationSteps: () => {},
  recallMemory: () => 0,
  setError: () => {},
  setInputString: () => {},
  setInput: () => {},
  setMemory: () => {},
  setResolution: () => {},
  setRightAngle: (newRightAngle) => {},
  setWorkingValue: () => {},
  setTotalUnits: () => {},
  setTotalValue: () => {},
  setUnits: () => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | undefined>();
  const [inputString, setInputString] = useState<string | undefined>('');
  const [input, setInput] = useState<number | undefined>();
  const [memory, _setMemory] = useState<Value[]>([]);
  const [workingValue, setWorkingValue] = useState<Value | undefined>();
  const [resolution, _setResolution] = useState<Resolution>(Resolution.sixteenth);
  const [rightAngle, setRightAngle] = useState<RightAngle>(EmptyRightAngle);
  const [calculationSteps, _setCalculationSteps] = useState<CalculationStep[]>([]);
  const [totalUnits, setTotalUnits] = useState<TotalUnits | undefined>();
  const [totalValue, setTotalValue] = useState<Value | undefined>();
  const [units, setUnits] = useState<Units | undefined>(Units.imperial);

  useEffect(() => {
    // console.log({ rightAngle });
    let newInput;
    if (inputString != null && inputString !== '') {
      newInput = parseFloat(inputString);
      setInput(newInput);
    } else {
      setInput(undefined);
    }
    console.log({ input: newInput });
    console.log({ workingValue });
    console.log({ totalValue });
    console.log({ calculationSteps });
  }, [inputString, workingValue, calculationSteps, totalValue, rightAngle]);

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

  const addCalculationStep = (calculationStep: CalculationStep) => {
    _setCalculationSteps([...calculationSteps, calculationStep]);
  };

  const clearCalculationSteps = () => _setCalculationSteps([]);

  return (
    <ValueContext.Provider
      value={{
        calculationSteps,
        error,
        inputString,
        input,
        memory,
        resolution,
        rightAngle,
        workingValue,
        totalUnits,
        totalValue,
        units,
        addCalculationStep,
        addMemory,
        clearCalculationSteps,
        recallMemory,
        setError,
        setInputString,
        setInput,
        setMemory,
        setResolution,
        setRightAngle,
        setTotalUnits,
        setTotalValue,
        setUnits,
        setWorkingValue,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
