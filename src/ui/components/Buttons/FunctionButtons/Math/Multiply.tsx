import React, { useContext, FC } from 'react';
import { multiplyAction } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

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

  const handleClick = () =>
    multiplyAction({
      addCalculationStep,
      calculationSteps,
      input,
      setInputString,
      setTotalValue,
      setWorkingValue,
      totalValue,
      workingValue,
    });

  return <Button onClick={() => handleClick()}>*</Button>;
};
