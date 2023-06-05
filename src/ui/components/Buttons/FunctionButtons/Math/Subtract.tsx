import React, { useContext, FC } from 'react';
import { Symbols, subtractAction } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Subtract: FC = () => {
  const {
    addCalculationStep,
    calculationSteps,
    input,
    setInputString,
    setWorkingValue,
    setTotalValue,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    subtractAction({
      addCalculationStep,
      calculationSteps,
      input,
      setInputString,
      setTotalValue,
      setWorkingValue,
      totalValue,
      workingValue,
    });

  return <Button onClick={() => handleClick()}>{Symbols.subtract}</Button>;
};
