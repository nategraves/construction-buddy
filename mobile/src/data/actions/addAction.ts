import { add, isSame, Symbols } from 'src/data';
import { ActionProps } from './actionType';

export const addAction = ({
  addToHistory,
  calculationSteps,
  clearCalculationSteps,
  input,
  workingValue,
  addCalculationStep,
  setInputString,
  setWorkingValue,
}: ActionProps): void => {
  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;
  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;
  const noSteps = calculationSteps.length === 0;

  if (!hasWorkingValue && !hasInput && !lastTotal) {
    // TODO: Handle error
    return;
  }

  // No calculation steps with input
  if (noSteps && hasInput) {
    addCalculationStep({
      value: input,
      operation: Symbols.add,
      total: input,
    });
    setInputString();
    return;
  }

  // No calculation steps with working value
  if (noSteps && hasWorkingValue) {
    addCalculationStep({
      value: workingValue,
      operation: Symbols.add,
      total: workingValue,
    });
    setWorkingValue();
    return;
  }

  // No calculation steps with total
  if (noSteps && lastTotal) {
    addToHistory(calculationSteps);
    addCalculationStep({
      value: lastTotal,
      operation: Symbols.add,
      total: lastTotal,
    });
    clearCalculationSteps();
    return;
  }

  if (noSteps && !hasInput && !hasWorkingValue && lastTotal != null) {
    throw new Error('No calculation steps and no input or working value');
  }

  let compatibleValue = false;

  if (hasInput) {
    compatibleValue = isSame(input, lastTotal);
    if (compatibleValue) {
      const total = (lastTotal as number) + input;
      addCalculationStep({
        value: input,
        operation: Symbols.add,
        total,
      });
      setInputString();
      return;
    }
    // TODO: Handle error
  }

  if (hasWorkingValue) {
    compatibleValue = isSame(workingValue, lastTotal);
    if (compatibleValue) {
      const total = add({ value: lastTotal, toApply: workingValue });
      addCalculationStep({
        value: workingValue,
        operation: Symbols.add,
        total,
      });
      setWorkingValue();
      return;
    }
  }

  if (lastTotal != null) {
    compatibleValue = isSame(lastTotal, lastTotal);
    if (compatibleValue) {
      addToHistory(calculationSteps);
      addCalculationStep({
        value: lastTotal,
        operation: Symbols.add,
        total: lastTotal,
      });
      clearCalculationSteps();
      return;
    }
  }

  throw new Error('No compatible value to add');
};
