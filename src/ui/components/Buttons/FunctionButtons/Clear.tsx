import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Clear = () => {
  const {
    inputString,
    calculationSteps,
    totalValue,
    workingValue,
    clearCalculationSteps,
    setInputString,
    setTotalValue,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString != null) {
      setInputString();
      return;
    }
    if (workingValue) {
      setWorkingValue();
      return;
    }
    if (calculationSteps.length > 0) {
      clearCalculationSteps();
      return;
    }
    if (totalValue) {
      setTotalValue();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
