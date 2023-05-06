import React, { useContext, FC } from 'react';
import { isImperial, isMetric, isNumber } from '~/data/Value';
import { Mode } from '~/types';

import { ValueContext } from '~/contexts';
import { Button } from '~/ui';

export const Subtract: FC = () => {
  const {
    input,
    setInputString,
    updateMode,
    setWorkingValue,
    setTotalValue,
    addToProcess,
    workingValue,
    totalValue,
    toProcess,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.subtract);

    if (input == null && workingValue == null && totalValue != null) {
      addToProcess(totalValue);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldSubtractNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldSubtractImperial =
      isImperial(workingValue) && (firstToProcess == null || isImperial(firstToProcess));
    const shouldSubtractMetric =
      isMetric(workingValue) && (firstToProcess == null || isMetric(firstToProcess));

    if (shouldSubtractNumber) {
      addToProcess(input);
      setInputString();
      return;
    }

    if (shouldSubtractImperial || shouldSubtractMetric) {
      addToProcess(workingValue);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>-</Button>;
};
