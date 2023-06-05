import { Symbols } from '../Symbols';
import { isSame } from '../isSame';
import { multiply } from '../multiply';
import { ActionProps } from './actionType';
import { fillMeasurement } from './fillMeasurement';

export const multiplyAction = ({
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

  fillMeasurement({ input, workingValue, setWorkingValue });

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
        operator: Symbols.multiply,
        total: (lastStep.total as number) * input,
      });
      setInputString();
      return;
    }
  }

  if (hasWorkingValue) {
    compatibleValues = isSame(workingValue, lastStep.total);

    if (compatibleValues) {
      // TODO: Improve this so that we display ft or m squared with appropriate postscript
      addCalculationStep({
        value: workingValue,
        operator: Symbols.multiply,
        total: multiply({ value: lastStep.total, toApply: workingValue }),
        postscript: Symbols.square,
      });
      setWorkingValue();
      return;
    }
  }

  if (hasTotal) {
    console.log('TOTAL', totalValue);
    compatibleValues = isSame(totalValue, lastStep.total);

    if (compatibleValues) {
      // TODO: Improve this so that we display ft or m squared with appropriate postscript
      addCalculationStep({
        value: totalValue,
        operator: Symbols.multiply,
        total: multiply({ value: lastStep.total, toApply: totalValue }),
        postscript: Symbols.square,
      });
      setTotalValue();
      return;
    }
  }

  throw new Error('Mulitiplication could not be performed');
};
