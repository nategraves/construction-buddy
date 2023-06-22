import React, { useContext, FC } from 'react';
import { Text } from 'react-native';

import { addAction, Symbols } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Add: FC = () => {
  const {
    addToHistory,
    calculationSteps,
    clearCalculationSteps,
    input,
    workingValue,
    addCalculationStep,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    addAction({
      addToHistory,
      calculationSteps,
      clearCalculationSteps,
      input,
      workingValue,
      addCalculationStep,
      setInputString,
      setWorkingValue,
    });

  return <Button onPress={() => handleClick()}>{Symbols.add}</Button>;
};
