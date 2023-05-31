import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';
import { equalsAction } from 'src/data';

export const Equals = () => {
  const {
    calculationSteps,
    input,
    totalValue,
    workingValue,
    addCalculationStep,
    clearCalculationSteps,
    setInputString,
    setWorkingValue,
    setTotalValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    equalsAction({
      calculationSteps,
      input,
      totalValue,
      workingValue,
      addCalculationStep,
      clearCalculationSteps,
      setInputString,
      setTotalValue,
      setWorkingValue,
    });

  return <Button onClick={() => handleClick()}>=</Button>;
};
