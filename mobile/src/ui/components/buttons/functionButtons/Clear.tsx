import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Clear = () => {
  const {
    inputString,
    calculationSteps,
    workingValue,
    clearCalculationSteps,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString != null) {
      setInputString();
      return;
    }
    if (workingValue != null) {
      setWorkingValue();
      return;
    }
    if (calculationSteps.length > 0) {
      clearCalculationSteps();
    }
  };

  return <Button onPress={() => handleClick()}>CLR</Button>;
};
