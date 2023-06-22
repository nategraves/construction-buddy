import React, { useContext, FC } from 'react';
import { Text } from 'react-native';

import { Symbols, subtractAction } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Subtract: FC = () => {
  const {
    addCalculationStep,
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    setInputString,
    setWorkingValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    subtractAction({
      addCalculationStep,
      addToHistory,
      calculationSteps,
      clearCalculationSteps,
      input,
      setInputString,
      setWorkingValue,
      workingValue,
    });

  return <Button onPress={() => handleClick()}>{Symbols.subtract}</Button>;
};
