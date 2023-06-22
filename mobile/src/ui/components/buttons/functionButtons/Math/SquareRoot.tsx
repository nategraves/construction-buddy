import React, { FC, useContext } from 'react';
import { Text } from 'react-native';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';
import { Symbols, squareRoot } from 'src/data';

export const SquareRoot: FC = () => {
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

  const totalPrescript = Symbols.squareRoot;
  const operation = Symbols.equals;

  const handleClick = () => {
    const lastStep = calculationSteps[calculationSteps.length - 1];
    const lastTotal = lastStep?.total;
    if (input == null && workingValue == null && lastStep == null) {
      // TODO: Handle error
      return;
    }

    if (input != null) {
      addCalculationStep({
        totalPrescript,
        value: input,
        operation,
        total: squareRoot({ value: input }),
      });
      setInputString();
      return;
    }

    if (workingValue != null) {
      addCalculationStep({
        value: workingValue,
        operation,
        total: squareRoot({ value: workingValue }),
      });
      setWorkingValue();
      return;
    }

    if (lastTotal != null) {
      addCalculationStep({
        totalPrescript,
        value: lastTotal,
        operation,
        total: squareRoot({ value: lastTotal }),
      });
      addToHistory(calculationSteps);
      clearCalculationSteps();
      return;
    }
  };

  return <Button onPress={() => handleClick()}>√x</Button>;
};
