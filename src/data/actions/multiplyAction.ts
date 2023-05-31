import { Symbols } from '../Symbols';
import { isImperial } from '../isImperial';
import { isMetric } from '../isMetric';
import { isSame } from '../isSame';
import { multiply } from '../multiply';
import { ActionProps } from './actionType';

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

  // If there's input and we have a working value, assume
  // that we're filling in the next empty measurement
  const fillNextMeasurement = input != null && workingValue != null;
  const fillInches =
    fillNextMeasurement &&
    isImperial(workingValue) &&
    workingValue.ft != null &&
    workingValue.ins == null;
  const fillCm =
    fillNextMeasurement &&
    isMetric(workingValue) &&
    workingValue.m != null &&
    workingValue.cm == null;
  const fillMm =
    fillNextMeasurement &&
    isMetric(workingValue) &&
    workingValue.m != null &&
    workingValue.cm != null &&
    workingValue.mm == null;

  if (fillInches) {
    setWorkingValue({ ...workingValue, ...(input ? { ins: input } : {}) });
  } else if (fillCm) {
    setWorkingValue({ ...workingValue, ...(input ? { cm: input } : {}) });
  } else if (fillMm) {
    setWorkingValue({ ...workingValue, ...(input ? { mm: input } : {}) });
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
    compatibleValues = isSame(totalValue, lastStep.total);

    if (compatibleValues) {
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
