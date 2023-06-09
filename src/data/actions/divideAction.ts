import { ImperialValue } from '../ImperialValue';
import { MetricValue } from '../MetricValue';
import { Symbols } from '../Symbols';
import { Units } from '../Units';
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

  if (input == null && workingValue == null && lastTotal == null) {
    return;
  }

  if (input == null && workingValue == null && lastTotal != null) {
    addToHistory(calculationSteps);
    addCalculationStep({
      value: lastTotal,
      operation: Symbols.divide,
      total: lastTotal,
    });
    clearCalculationSteps();
    return;
  }

  if (input != null) {
    addCalculationStep({
      value: input,
      operation: Symbols.divide,
      total: divide({ value: lastTotal, toApply: input }),
      totalPostscript: lastStep.totalPostscript,
    });
    setInputString();
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
