import React, { useContext, FC } from 'react';

import { Symbols, multiply } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

const operator = Symbols.multiply;

export const Multiply: FC = () => {
  const {
    addCalculationStep,
    calculationSteps,
    input,
    setInputString,
    setTotalValue,
    setWorkingValue,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const value = input ?? workingValue ?? totalValue;

    if (value == null) {
      return;
    }

    const lastTotal = calculationSteps[calculationSteps.length - 1]?.total;

    if (lastTotal == null) {
      addCalculationStep({
        value,
        operator,
        total: value,
      });
    } else {
      addCalculationStep({
        value,
        operator,
        total: multiply({ value: lastTotal, toApply: value }),
      });
    }

    setInputString();
    setWorkingValue();
    setTotalValue();
  };

  return <Button onClick={() => handleClick()}>{Symbols.multiply}</Button>;
};
