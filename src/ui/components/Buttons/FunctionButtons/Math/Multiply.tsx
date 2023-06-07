import React, { useContext, FC } from 'react';

import { Symbols, multiply } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

const operation = Symbols.multiply;

export const Multiply: FC = () => {
  const {
    addCalculationStep,
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    setInputString,
    setWorkingValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const lastStep = calculationSteps[calculationSteps.length - 1];
    const lastTotal = lastStep?.total;
    const hasInput = input != null;
    const hasWorkingValue = workingValue != null;

    if (!hasInput && !hasWorkingValue && lastTotal == null) {
      // TODO: Handle error
      return;
    }

    if (hasInput) {
      addCalculationStep({
        value: input,
        operation,
        total: multiply({ value: lastTotal, toApply: input }),
      });
      setInputString();
      return;
    }

    if (hasWorkingValue) {
      addCalculationStep({
        value: workingValue,
        operation,
        total: multiply({ value: lastTotal, toApply: workingValue }),
      });
      setWorkingValue();
    }

    if (lastTotal != null) {
      addToHistory(calculationSteps);
      addCalculationStep({
        value: lastTotal,
        operation,
        total: lastTotal,
      });
      clearCalculationSteps();
    }
  };

  return <Button onClick={() => handleClick()}>{Symbols.multiply}</Button>;
};
