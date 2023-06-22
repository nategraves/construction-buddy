import { ImperialValue } from '../types/ImperialValue';
import { MetricValue } from '../types/MetricValue';
import { Symbols } from '../Symbols';
import { Units } from '../types/Units';
import { divide } from '../divide';
import { flatten } from '../flatten';
import { isImperial } from '../isImperial';
import { isSame } from '../isSame';
import { unflatten } from '../unflatten';
import { ActionProps } from './actionType';

export const divideAction = ({
  calculationSteps,
  input,
  workingValue,
  addCalculationStep,
  addToHistory,
  clearCalculationSteps,
  setInputString,
  setWorkingValue,
}: ActionProps) => {
  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;

  const hasInput = input != null;
  const hasWorkingValue = workingValue != null;
  const hasTotal = lastTotal != null;

  if (!hasInput && !hasWorkingValue && !hasTotal) {
    return;
  }

  if (hasInput && hasWorkingValue) {
    throw new Error('Cannot have both input and working value');
  }

  if (!hasInput && !hasWorkingValue && hasTotal) {
    addToHistory(calculationSteps);
    addCalculationStep({
      value: lastTotal,
      operation: Symbols.divide,
      total: lastTotal,
    });
    clearCalculationSteps();
    return;
  }

  if (hasInput) {
    addCalculationStep({
      value: input,
      operation: Symbols.divide,
      total: hasTotal ? divide({ value: lastTotal, toApply: input }) : input,
      totalPostscript: lastStep?.totalPostscript ?? undefined,
    });
    setInputString();
    return;
  }

  if (hasWorkingValue && hasTotal) {
    addCalculationStep({
      value: workingValue,
      operation: Symbols.divide,
      total: hasTotal ? divide({ value: lastTotal, toApply: workingValue }) : workingValue,
    });
    setWorkingValue();
    return;
  } else if (hasWorkingValue) {
    addCalculationStep({
      value: workingValue,
      operation: Symbols.divide,
      total: hasTotal ? divide({ value: lastTotal, toApply: workingValue }) : workingValue,
      totalPostscript: lastStep?.totalPostscript ?? undefined,
    });
    setWorkingValue();
    return;
  }

  if (workingValue != null && isSame(workingValue, lastTotal)) {
    if (lastStep.totalPostscript === Symbols.square) {
      const flatLast = flatten(lastTotal) * flatten(lastTotal);
      const units = isImperial(lastTotal) ? Units.imperial : Units.metric;
      const includeM = units === Units.metric && (lastTotal as MetricValue).m != null;
      const includeFt = units === Units.imperial && (lastTotal as ImperialValue).ft != null;
      addCalculationStep({
        value: workingValue,
        operation: Symbols.divide,
        total: divide({
          value: unflatten({ value: flatLast, units, includeFt, includeM }),
          toApply: workingValue,
        }),
        totalPostscript: undefined,
      });
    } else {
      addCalculationStep({
        value: workingValue,
        operation: Symbols.divide,
        total: divide({ value: lastTotal, toApply: workingValue }),
      });
    }
    setWorkingValue();
    return;
  }

  throw new Error('Unknown divide action attempted');
};
