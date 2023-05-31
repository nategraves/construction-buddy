import { Symbols } from '../Symbols';
import { isSame } from '../isSame';
import { subtract } from '../subtract';
import { ActionProps } from './actionType';

export const subtractAction = ({
  addCalculationStep,
  calculationSteps,
  input,
  setInputString,
  setTotalValue,
  setWorkingValue,
  totalValue,
  workingValue,
}: ActionProps) => {
  if (input == null && workingValue == null && totalValue == null) {
    return;
  }

  if (input == null && workingValue == null && totalValue != null) {
    // TODO: Handle error
    return;
  }

  const lastStep = calculationSteps[calculationSteps.length - 1];

  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;
  const hasTotal = totalValue != null;

  let compatibleValues;

  if (hasInput) {
    compatibleValues = isSame(input, lastStep.total);

    if (compatibleValues) {
      addCalculationStep({
        value: input,
        operator: Symbols.subtract,
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
        operator: Symbols.subtract,
        total: subtract({ value: lastStep.total, toApply: workingValue }),
      });
      setWorkingValue();
      return;
    }
  }

  if (hasTotal) {
    compatibleValues = isSame(totalValue, lastStep.total);

    if (compatibleValues) {
      addCalculationStep({
        value: totalValue,
        operator: Symbols.subtract,
        total: subtract({ value: lastStep.total, toApply: totalValue }),
      });
      setTotalValue();
    }
  }
};
