import { Symbols } from '../Symbols';
import { isSame } from '../isSame';
import { subtract } from '../subtract';
import { ActionProps } from './actionType';

type SubtractActionProps = ActionProps;

const operation = Symbols.subtract;

export const subtractAction = ({
  addCalculationStep,
  addToHistory,
  calculationSteps,
  clearCalculationSteps,
  input,
  setInputString,
  setWorkingValue,
  workingValue,
}: SubtractActionProps) => {
  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;

  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;
  const hasTotal = lastStep.operation === Symbols.equals && lastTotal != null;

  if (!hasInput && !hasWorkingValue && !hasTotal) {
    // TODO: Handle error
    return;
  }

  let compatibleValues;

  if (hasInput) {
    compatibleValues = isSame(input, lastStep.total);

    if (compatibleValues) {
      addCalculationStep({
        value: input,
        operation,
        total: (lastStep.total as number) - input,
      });
      setInputString();
      return;
    }
  }

  if (hasWorkingValue) {
    compatibleValues = isSame(workingValue, lastStep.total);

    if (compatibleValues) {
      addCalculationStep({
        value: workingValue,
        operation,
        total: subtract({ value: lastStep.total, toApply: workingValue }),
      });
      setWorkingValue();
      return;
    }
  }

  if (hasTotal) {
    addToHistory(calculationSteps);
    addCalculationStep({
      value: lastTotal,
      total: lastTotal,
    });
    clearCalculationSteps();
  }
};
