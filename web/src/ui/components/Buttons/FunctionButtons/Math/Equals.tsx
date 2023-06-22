import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';
import { Symbols, equalsAction } from 'src/data';

export const Equals = () => {
  const {
    addToHistory,
    calculationSteps,
    input,
    workingValue,
    addCalculationStep,
    clearCalculationSteps,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    console.log('poo');
    equalsAction({
      addToHistory,
      calculationSteps,
      input,
      workingValue,
      addCalculationStep,
      clearCalculationSteps,
      setInputString,
      setWorkingValue,
    });
  };

  return <Button onClick={handleClick}>{Symbols.equals}</Button>;
};
