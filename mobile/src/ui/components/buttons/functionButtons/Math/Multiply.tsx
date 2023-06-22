import React, { useContext, FC } from 'react';
import { Text } from 'react-native';

import { Symbols, multiplyAction } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Multiply: FC = () => {
  const {
    addCalculationStep,
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    setInputString,
    setWorkingValue,
    workingValue,
    updateCalculationStep,
  } = useContext(ValueContext);

  const handleClick = () => {
    multiplyAction({
      addCalculationStep,
      addToHistory,
      calculationSteps,
      clearCalculationSteps,
      input,
      setInputString,
      setWorkingValue,
      workingValue,
      updateCalculationStep,
    });
  };

  return <Button onPress={() => handleClick()}>{Symbols.multiply}</Button>;
};
