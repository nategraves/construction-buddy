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
  setWorkingValue,
  workingValue,
}: ActionProps) => {
  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;

  if (input == null && workingValue == null && lastTotal == null) {
    return;
  }

  fillMeasurement({ input, workingValue, setWorkingValue });

  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;

  let compatibleValues;

  if (hasInput) {
    compatibleValues = isSame(input, lastStep.total);

    if (compatibleValues) {
      addCalculationStep({
        value: input,
        operation: Symbols.multiply,
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
        operation: Symbols.multiply,
        total: multiply({ value: lastStep.total, toApply: workingValue }),
        postscript: Symbols.square,
      });
      setWorkingValue();
      return;
    }
  }

  if (lastTotal != null) {
    addCalculationStep({
      value: lastTotal,
      operation: Symbols.multiply,
      total: lastTotal,
    });
    return;
  }

  throw new Error('Mulitiplication could not be performed');
};
