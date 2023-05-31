import { OperationSymbols, operationsMap } from '../Operations';
import { Symbols } from '../Symbols';
import { Value } from '../Value';
import { ActionProps } from './actionType';

type EqualsActionProps = ActionProps & {
  clearCalculationSteps: () => void;
};

export const equalsAction = ({
  calculationSteps,
  input,
  workingValue,
  addCalculationStep,
  setInputString,
  setWorkingValue,
  setTotalValue,
}: EqualsActionProps) => {
  if (calculationSteps.length === 0) {
    // TODO: Handle error
    return;
  }

  const stepCount = calculationSteps.length;
  const lastStep = calculationSteps[stepCount - 1];
  const lastStepOperator = lastStep.operator;

  if (lastStepOperator == null) {
    // TOOD: Handle error
    return;
  }

  const operation = operationsMap[lastStepOperator as OperationSymbols];

  const toApply = input ?? workingValue;

  if (toApply == null) {
    // TODO: handle error
    return;
  }

  const total = operation({ value: lastStep.total, toApply: toApply as Value });

  addCalculationStep({
    value: toApply,
    operator: Symbols.equals,
    total,
  });

  setTotalValue(total);

  if (input != null) {
    setInputString();
  }

  if (workingValue != null) {
    setWorkingValue();
  }

  // const action = actionMap[lastStepOperator as OperationSymbols];

  // if (!action) {
  //   throw new Error('Unhandleable operator');
  // }

  // action({
  //   calculationSteps,
  //   input,
  //   totalValue,
  //   workingValue,
  //   addCalculationStep,
  //   setInputString,
  //   setWorkingValue,
  //   setTotalValue,
  // });

  // const requiresSameValueType = lastStep.operator === Symbols.add || lastStep.operator === Symbols.subtract;

  // let sameValueType;

  // if (input != null) {
  //   sameValueType = isSame(input, lastStep.total);
  //   if (requiresSameValueType && sameValueType) {

  // if (workingValue) {
  //   if (toProcess.length && isSame(workingValue, toProcess[0])) {
  //     toProcess = [...toProcess, workingValue];
  //   } else {
  //     toProcess = [workingValue];
  //   }
  //   setWorkingValue();
  // }

  // if (!toProcess.length) {
  //   throw new Error(`Unable to apply '${mode}' because toProcess is empty`);
  // }

  // const initial = toProcess.shift();

  // if (toProcess.length === 0 && input == null && workingValue == null) {
  //   console.warn('Only 1 value in toProcess. Setting as total');
  //   setTotalValue(initial);
  // } else if (toProcess.length === 0 && input != null) {
  //   const total = modeMap[mode]({ value: initial!, toApply: input });
  //   setInputString();
  //   setTotalValue(total!);
  // } else if (toProcess.length === 0 && workingValue != null) {
  //   const total = modeMap[mode]({ value: initial!, toApply: workingValue });
  //   setWorkingValue();
  //   setTotalValue(total!);
  // } else {
  //   console.warn({ initial, toProcess, mode, input });
  //   const total = toProcess.reduce((sum, value) => {
  //     const newSum = modeMap[mode]({ value: sum!, toApply: value });
  //     return newSum;
  //   }, initial);
  //   setTotalValue(total);
  // }

  // updateMode(Mode.equals);
  // clearCalculationSteps();
};
