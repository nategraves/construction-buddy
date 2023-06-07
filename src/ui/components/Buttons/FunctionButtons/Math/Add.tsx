import React, { useContext, FC } from 'react';
import { addAction, Symbols } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Add: FC = () => {
  const {
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    workingValue,
    addCalculationStep,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    addAction({
      addToHistory,
      calculationSteps,
      clearCalculationSteps,
      input,
      workingValue,
      addCalculationStep,
      setInputString,
      setWorkingValue,
    });

  return <Button onClick={() => handleClick()}>{Symbols.add}</Button>;
};
