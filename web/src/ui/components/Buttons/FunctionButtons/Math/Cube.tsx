import React, { useContext, FC } from 'react';
import { Symbols, multiply } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Cube: FC = () => {
  const {
    addCalculationStep,
    calculationSteps,
    input,
    setInputString,
    setWorkingValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const lastStep = calculationSteps[calculationSteps.length - 1];
    const lastTotal = lastStep?.total;

    if (input == null && workingValue == null && lastTotal == null) {
      return;
    }

    if (input != null) {
      const square = multiply({ value: input, toApply: input });
      addCalculationStep({
        value: input,
        operation: Symbols.cube,
        total: multiply({ value: square, toApply: lastTotal }),
      });
      setInputString();
      return;
    }

    if (workingValue != null) {
      const square = multiply({ value: workingValue, toApply: workingValue });
      addCalculationStep({
        value: workingValue,
        operation: `x${Symbols.cube}`,
        total: multiply({ value: square, toApply: lastTotal }),
        totalPostscript: Symbols.cube,
      });

      setWorkingValue();
      return;
    }

    if (lastTotal != null) {
      const square = multiply({ value: lastTotal, toApply: lastTotal });
      addCalculationStep({
        value: lastTotal,
        operation: `x${Symbols.cube}`,
        total: multiply({ value: square, toApply: lastTotal }),
        totalPostscript: Symbols.cube,
      });
    }

    throw new Error('Unhandled cube case');
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
