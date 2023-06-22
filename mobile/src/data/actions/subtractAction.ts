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
  const hasTotal = lastTotal != null;

  if (!hasInput && !hasWorkingValue && !hasTotal) {
    // TODO: Handle error
    return;
  }

  if (hasInput) {
    addCalculationStep({
      value: input,
      operation,
      total: hasTotal && isSame(input, lastTotal) ? (lastTotal as number) - input : input,
    });

    setInputString();
    return;
  }

  if (hasWorkingValue) {
    addCalculationStep({
      value: workingValue,
      operation,
      total:
        hasTotal && isSame(workingValue, lastTotal)
          ? subtract({ value: lastTotal, toApply: workingValue })
          : workingValue,
    });

    setWorkingValue();
    return;
  }

  if (hasTotal && !hasInput && !hasWorkingValue) {
    addToHistory(calculationSteps);
    addCalculationStep({
      value: lastTotal,
      total: lastTotal,
    });
    clearCalculationSteps();
  }
};
