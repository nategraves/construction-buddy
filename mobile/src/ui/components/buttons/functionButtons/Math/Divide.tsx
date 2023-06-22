import React, { useContext, FC } from 'react';
import { Text } from 'react-native';

import { Symbols, divideAction } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Divide: FC = () => {
  const {
    calculationSteps,
    input,
    workingValue,
    addCalculationStep,
    addToHistory,
    clearCalculationSteps,
    setInputString,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () =>
    divideAction({
      calculationSteps,
      input,
      workingValue,
      addCalculationStep,
      addToHistory,
      clearCalculationSteps,
      setInputString,
      setWorkingValue,
    });

  return <Button onPress={() => handleClick()}>{Symbols.divide}</Button>;
};
