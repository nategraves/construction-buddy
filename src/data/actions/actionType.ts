import { CalculationStep } from '../CalculationStep';
import { Value } from '../Value';

export type ActionProps = {
  calculationSteps: CalculationStep[];
  input: number | undefined;
  totalValue: Value | undefined;
  workingValue: Value | undefined;
  addCalculationStep: (calculationStep: CalculationStep) => void;
  setInputString: (newInputString?: string) => void;
  setTotalValue: (newTotal?: Value) => void;
  setWorkingValue: (newStored?: Value) => void;
};
