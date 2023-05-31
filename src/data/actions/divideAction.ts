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
  totalValue,
  workingValue,
  addCalculationStep,
  setInputString,
  setTotalValue,
  setWorkingValue,
}: ActionProps) => {
  if (input == null && workingValue == null && totalValue == null) {
    return;
  }

  if (input == null && workingValue == null && totalValue != null) {
    addCalculationStep({
      value: totalValue,
      operator: Symbols.divide,
      total: totalValue,
    });
    setTotalValue();
    return;
  }

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep.total;

  if (input != null) {
    addCalculationStep({
      value: input,
      operator: Symbols.divide,
      total: divide({ value: lastTotal, toApply: input }),
      postscript: lastStep.postscript,
    });
    setInputString();
    return;
  }

  if (workingValue != null && isSame(workingValue, lastTotal)) {
    if (lastStep.postscript === Symbols.square) {
      const flatLast = flatten(lastTotal) * flatten(lastTotal);
      const units = isImperial(lastTotal) ? Units.imperial : Units.metric;
      const includeM = units === Units.metric && (lastTotal as MetricValue).m != null;
      const includeFt = units === Units.imperial && (lastTotal as ImperialValue).ft != null;
      addCalculationStep({
        value: workingValue,
        operator: Symbols.divide,
        total: divide({
          value: unflatten({ value: flatLast, units, includeFt, includeM }),
          toApply: workingValue,
        }),
        postscript: undefined,
      });
    } else {
      addCalculationStep({
        value: workingValue,
        operator: Symbols.divide,
        total: divide({ value: lastTotal, toApply: workingValue }),
      });
    }
    setWorkingValue();
    return;
  }

  throw new Error('Unknown divide action attempted');
};
