import React, { useContext } from 'react';
import { Text } from 'react-native';

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

  const handleClick = () =>
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

  return <Button onPress={handleClick}>{Symbols.equals}</Button>;
};
