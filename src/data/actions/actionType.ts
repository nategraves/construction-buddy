import { CalculationStep } from '../types/CalculationStep';
import { Value } from '../Value';
import { ValueContextProps } from 'src/contexts';

export type ActionProps = {
  addToHistory: ValueContextProps['addToHistory'];
  calculationSteps: CalculationStep[];
  clearCalculationSteps: ValueContextProps['clearCalculationSteps'];
  input: number | undefined;
  workingValue: Value | undefined;
  addCalculationStep: (calculationStep: CalculationStep) => void;
  setInputString: (newInputString?: string) => void;
  setWorkingValue: (newStored?: Value) => void;
  updateCalculationStep?: (calculationStep: CalculationStep, index: number) => void;
};
