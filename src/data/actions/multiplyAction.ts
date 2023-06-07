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
  const hasTotal = lastTotal != null;

  let compatibleValues;

  if (lastStep == null) {
    let value, total;

    if (hasInput) {
      value = input;
      total = input;
    }

    if (hasWorkingValue) {
      value = workingValue;
      total = workingValue;
    }

    if (value == null || total == null) {
      // TODO: Handle error
      return;
    }

    addCalculationStep({
      value,
      operation: Symbols.multiply,
      total,
    });
    setInputString();
    setWorkingValue();
  }

  if (hasInput && hasTotal) {
    compatibleValues = isSame(input, lastTotal);

    if (compatibleValues) {
      addCalculationStep({
        value: input,
        operation: Symbols.multiply,
        total: (lastTotal as number) * input,
      });
      setInputString();
      return;
    }
  }

  if (hasWorkingValue && lastTotal != null) {
    compatibleValues = isSame(workingValue, lastTotal);

    if (compatibleValues) {
      // TODO: Improve this so that we display ft or m squared with appropriate postscript
      addCalculationStep({
        value: workingValue,
        operation: Symbols.multiply,
        total: multiply({ value: lastTotal, toApply: workingValue }),
        postscript: Symbols.square,
      });
      setWorkingValue();
      return;
    }
  }

  if (hasTotal) {
    addCalculationStep({
      value: lastTotal,
      operation: Symbols.multiply,
      total: lastTotal,
    });
    return;
  }

  throw new Error('Mulitiplication could not be performed');
};
