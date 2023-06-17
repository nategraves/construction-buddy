import React, { useContext } from 'react';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';
import { Symbols } from 'src/data';

interface Props {
  value: number | '.';
}

export const NumericButton = (props: Props) => {
  const { value } = props;
  const { addToHistory, calculationSteps, clearCalculationSteps, inputString, setInputString } =
    useContext(ValueContext);

  const handleButtonPress = () => {
    if (String(value).match(/(:?\d|\.)/g) === null) {
      return;
    }

    const lastStep = calculationSteps[calculationSteps.length - 1];
    const lastOperation = lastStep?.operation;

    if (lastOperation === Symbols.equals) {
      addToHistory(calculationSteps);
      clearCalculationSteps();
    }

    setInputString(`${inputString ?? ''}${value}`);
  };

  return (
    <Button key={`button-${value}`} onClick={() => handleButtonPress()}>
      {String(value)}
    </Button>
  );
};
