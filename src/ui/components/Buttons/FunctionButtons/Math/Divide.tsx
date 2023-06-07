import React, { useContext, FC } from 'react';
import { Symbols, divideAction } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Divide: FC = () => {
  const {
    calculationSteps,
    input,
    workingValue,
    addCalculationStep,
    addToHistory,
    clearCalculationSteps,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    divideAction({
      calculationSteps,
      input,
      workingValue,
      addCalculationStep,
      addToHistory,
      clearCalculationSteps,
      setInputString,
      setWorkingValue,
    });

  return <Button onClick={() => handleClick()}>{Symbols.divide}</Button>;
};
