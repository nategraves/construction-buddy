import React, { useContext, FC } from 'react';
import { Symbols, divideAction } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Divide: FC = () => {
  const {
    calculationSteps,
    input,
    totalValue,
    workingValue,
    addCalculationStep,
    setInputString,
    setTotalValue,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    divideAction({
      calculationSteps,
      input,
      totalValue,
      workingValue,
      addCalculationStep,
      setInputString,
      setTotalValue,
      setWorkingValue,
    });

  return <Button onClick={() => handleClick()}>{Symbols.divide}</Button>;
};
