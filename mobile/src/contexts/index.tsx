import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import {
  Resolution,
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

export type CalculationSteps = Array<CalculationStep>;

export interface ValueContextProps {
  calculationSteps: CalculationStep[];
  error: string | undefined;
  history: CalculationSteps[];
  inputString: string | undefined;
  input: number | undefined;
  memory: Value[];
  resolution: Resolution;
  rightAngle: RightAngle;
  units: Units;
  workingValue: Value | undefined;
  addMemory: (newValue: Value) => Value[];
  addCalculationStep: (calculationStep: CalculationStep) => void;
  addToHistory: (calculationSteps: CalculationSteps) => void;
  clearCalculationSteps: () => void;
  clearHistory: () => void;
  recallMemory: () => Value | undefined;
  setError: (newError: string | undefined) => void;
  setInputString: (newInputString?: string) => void;
  setInput: (newInput?: number | undefined) => void;
  setMemory: (newMemory?: Value[]) => void;
  setResolution: (newResolution: Resolution) => void;
  setRightAngle: (newRightAngle: RightAngle) => void;
  setUnits: (newUnits: Units) => void;
  setWorkingValue: (newStored?: Value) => void;
  updateCalculationStep: (
    calculationStep: CalculationStep,
    index: number,
  ) => void;
}

export const ValueContext = createContext<ValueContextProps>({
  calculationSteps: [],
  error: undefined,
  history: [],
  inputString: undefined,
  input: undefined,
  memory: [],
  resolution: Resolution.sixteenth,
  rightAngle: EmptyRightAngle,
  workingValue: undefined,
  units: Units.imperial,
  addMemory: (newValue) => [],
  addCalculationStep: (calculationStep) => {},
  addToHistory: (calculationSteps) => {},
  clearCalculationSteps: () => {},
  clearHistory: () => {},
  recallMemory: () => 0,
  setError: () => {},
  setInputString: () => {},
  setInput: () => {},
  setMemory: () => {},
  setResolution: () => {},
  setRightAngle: (newRightAngle) => {},
  setWorkingValue: () => {},
  setUnits: () => {},
  updateCalculationStep: (calculationStep, index) => {},
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | undefined>();
  const [history, setHistory] = useState<CalculationSteps[]>([]);
  const [inputString, _setInputString] = useState<string | undefined>('');
  const [input, setInput] = useState<number | undefined>();
  const [memory, _setMemory] = useState<Value[]>([]);
  const [workingValue, setWorkingValue] = useState<Value | undefined>();
  const [resolution, _setResolution] = useState<Resolution>(
    Resolution.sixteenth,
  );
  const [rightAngle, setRightAngle] = useState<RightAngle>(EmptyRightAngle);
  const [calculationSteps, _setCalculationSteps] = useState<CalculationSteps>(
    [],
  );
  const [units, setUnits] = useState<Units>(Units.imperial);

  const setInputString = (newInputString?: string) => {
    // console.log(`Setting context value for inputString: ${newInputString}`);
    _setInputString(newInputString);
  };

  useEffect(() => {
    // console.log({ rightAngle });
    let newInput;
    if (inputString != null && inputString !== '') {
      newInput = parseFloat(inputString);
      setInput(newInput);
    } else {
      setInput(undefined);
    }
    // console.log({ input: newInput });
    // console.log({ workingValue });
    console.log({ calculationSteps });
  }, [inputString, workingValue, calculationSteps, rightAngle]);

  const addCalculationStep = (calculationStep: CalculationStep) => {
    // console.log({ calculationStep });
    _setCalculationSteps([...calculationSteps, calculationStep]);
  };

  const updateCalculationStep = (
    calculationStep: CalculationStep,
    index: number,
  ) => {
    const calculationStepsDup = [...calculationSteps];
    calculationStepsDup[index] = calculationStep;
    _setCalculationSteps(calculationStepsDup);
  };

  const addMemory = (newValue: Value) => {
    _setMemory([...memory, newValue]);
    return memory;
  };

  const addToHistory = (calculationSteps: CalculationSteps) => {
    setHistory([...history, calculationSteps]);
  };

  const clearCalculationSteps = () => _setCalculationSteps([]);

  const clearHistory = () => setHistory([]);

  const recallMemory = () => {
    const memoryDup = [...memory];
    const lastMemory = memoryDup.pop();
    _setMemory(memoryDup);
    return lastMemory;
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

  return (
    <ValueContext.Provider
      value={{
        calculationSteps,
        error,
        history,
        inputString,
        input,
        memory,
        resolution,
        rightAngle,
        workingValue,
        units,
        addCalculationStep,
        addMemory,
        addToHistory,
        clearCalculationSteps,
        clearHistory,
        recallMemory,
        setError,
        setInputString,
        setInput,
        setMemory,
        setResolution,
        setRightAngle,
        setUnits,
        setWorkingValue,
        updateCalculationStep,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
