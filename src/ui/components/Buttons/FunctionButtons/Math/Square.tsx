import React, { useContext, FC } from 'react';
import { Symbols, square } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const postscript = Symbols.square;
const operation = Symbols.equals;

export const Square: FC = () => {
  const {
    addCalculationStep,
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    workingValue,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const lastStep = calculationSteps[calculationSteps.length - 1];
    const lastTotal = lastStep?.total;
    if (input == null && workingValue == null && lastTotal == null) {
      // TODO: Handle error
      return;
    }

    if (input != null) {
      addCalculationStep({
        value: input,
        operation,
        total: square({ value: input }),
        postscript,
      });
      setInputString();
      return;
    }

    if (workingValue != null) {
      addCalculationStep({
        value: workingValue,
        operation,
        total: square({ value: workingValue }),
        postscript,
      });
      setWorkingValue();
      return;
    }

    if (lastTotal != null) {
      addToHistory(calculationSteps);
      clearCalculationSteps();
      addCalculationStep({
        value: lastTotal,
        operation,
        total: square({ value: lastTotal }),
        postscript,
      });
      return;
    }
  };

  return (
    <Button onClick={() => handleClick()}>
      <span>
        x<sup>2</sup>
      </span>
    </Button>
  );
};
