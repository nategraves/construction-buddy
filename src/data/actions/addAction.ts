import { add, isSame, Symbols } from 'src/data';
import { ActionProps } from './actionType';

export const addAction = ({
  calculationSteps,
  input,
  totalValue,
  workingValue,
  addCalculationStep,
  setInputString,
  setTotalValue,
  setWorkingValue,
}: ActionProps): void => {
  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;
  const hasTotal = totalValue != null;

  if ((!hasWorkingValue && !hasInput && !hasTotal) || (hasInput && hasWorkingValue)) {
    // TODO: Handle error
    return;
  }

  const emptySteps = calculationSteps.length === 0;

  // No calculation steps with input
  if (emptySteps && hasInput) {
    addCalculationStep({
      value: input,
      operator: Symbols.add,
      total: input,
    });
    setInputString();
    return;
  }

  // No calculation steps with working value
  if (emptySteps && hasWorkingValue) {
    addCalculationStep({
      value: workingValue,
      operator: Symbols.add,
      total: workingValue,
    });
    setWorkingValue();
    return;
  }

  // No calculation steps with total
  if (emptySteps && hasTotal) {
    addCalculationStep({
      value: totalValue,
      operator: Symbols.add,
      total: totalValue,
    });
    setTotalValue();
    return;
  }

  if (emptySteps && !hasInput && !hasWorkingValue && !hasTotal) {
    throw new Error('No calculation steps and no input, working value, or total');
  }

  const lastStep = calculationSteps[calculationSteps.length - 1];
  let compatibleValue = false;

  if (hasInput) {
    compatibleValue = isSame(input, lastStep.value);
    if (compatibleValue) {
      const total = (lastStep.total as number) + input;
      addCalculationStep({
        value: input,
        operator: Symbols.add,
        total,
      });
      setInputString();
      return;
    }
    // TODO: Handle error
  }

  if (hasWorkingValue) {
    compatibleValue = isSame(workingValue, lastStep.value);
    if (compatibleValue) {
      const total = add({ value: workingValue, toApply: lastStep.value });
      addCalculationStep({
        value: workingValue,
        operator: Symbols.add,
        total,
      });
      setWorkingValue();
      return;
    }
  }

  if (hasTotal) {
    compatibleValue = isSame(totalValue, lastStep.value);
    if (compatibleValue) {
      const total = add({ value: totalValue, toApply: lastStep.value });
      addCalculationStep({
        value: totalValue,
        operator: Symbols.add,
        total,
      });
      setTotalValue();
      return;
    }
  }
};
