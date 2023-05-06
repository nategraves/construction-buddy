import React, { useContext, FC } from 'react';
import { isImperial, isMetric, isNumber } from '~/data';
import { Mode } from '~/types';

import { ValueContext } from '~/contexts';
import { Button } from '~/ui';

export const Divide: FC = () => {
  const {
    input,
    toProcess,
    totalValue,
    workingValue,
    addToProcess,
    setInputString,
    setWorkingValue,
    setTotalValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.divide);

    if (input == null && workingValue == null && totalValue != null) {
      addToProcess(totalValue);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldDivideNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldDivideImperial =
      isImperial(workingValue) && (firstToProcess == null || isImperial(firstToProcess));
    const shouldDivideMetric =
      isMetric(workingValue) && (firstToProcess == null || isMetric(firstToProcess));

    if (shouldDivideNumber) {
      addToProcess(input);
      setInputString();
      return;
    }

    if (shouldDivideImperial || shouldDivideMetric) {
      addToProcess(workingValue);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>/</Button>;
};
