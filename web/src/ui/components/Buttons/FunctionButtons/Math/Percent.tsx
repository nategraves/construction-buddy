import React, { useContext } from 'react';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';
import { percentAction } from 'src/data';

export function Percent() {
  const {
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    addCalculationStep,
    setInputString,
    setWorkingValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    percentAction({
      addCalculationStep,
      addToHistory,
      calculationSteps,
      clearCalculationSteps,
      input,
      setInputString,
      setWorkingValue,
      workingValue,
    });
  };

  return <Button onClick={() => handleClick()}>%</Button>;
}
