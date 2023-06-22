import { ActionProps } from './actionType';
import { Symbols } from 'src/data/Symbols';
import { operationsMap, OperationSymbols } from 'src/data/types/Operations';

export const percentAction = ({
  addCalculationStep,
  calculationSteps,
  input,
  setInputString,
}: ActionProps) => {
  if (input == null) {
    // TODO: handle this
    return;
  }
  const pct = input / 100;

  if (calculationSteps.length === 0) {
    addCalculationStep({
      value: pct,
      valuePostscript: Symbols.percent,
      total: pct,
    });

    setInputString();
    return;
  }

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastOperator = lastStep.operation;

  if (lastOperator == null) {
    // TODO: handle this
    return;
  }

  const operation = operationsMap[lastOperator as OperationSymbols];

  const total = operation({
    value: lastStep.total,
    toApply: pct,
  });

  addCalculationStep({
    value: input,
    operation: Symbols.equals,
    totalPostscript: Symbols.percent,
    total,
  });

  setInputString();
};
