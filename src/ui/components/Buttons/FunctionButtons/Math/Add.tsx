import React, { useContext, FC } from 'react';
import { addAction, Symbols } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Add: FC = () => {
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
    addAction({
      calculationSteps,
      input,
      totalValue,
      workingValue,
      addCalculationStep,
      setInputString,
      setTotalValue,
      setWorkingValue,
    });

  return <Button onClick={() => handleClick()}>{Symbols.add}</Button>;
};
