import React, { useContext, FC } from 'react';
import { isImperial, isMetric, isNumber } from 'src/data';
import { Mode } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Multiply: FC = () => {
  const {
    input,
    inputString,
    setInputString,
    addToProcess,
    setTotalValue,
    setWorkingValue,
    updateMode,
    toProcess,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString == null && workingValue == null && totalValue == null) {
      return;
    }

    // If there's input and we have a working value, assume
    // that we're filling in the next empty measurement
    const fillNextMeasurement = inputString != null && workingValue != null;
    const fillInches =
      fillNextMeasurement &&
      isImperial(workingValue) &&
      workingValue.ft != null &&
      workingValue.ins == null;
    const fillCm =
      fillNextMeasurement &&
      isMetric(workingValue) &&
      workingValue.m != null &&
      workingValue.cm == null;
    const fillMm =
      fillNextMeasurement &&
      isMetric(workingValue) &&
      workingValue.m != null &&
      workingValue.cm != null &&
      workingValue.mm == null;

    if (fillInches) {
      setWorkingValue({ ...workingValue, ...(input ? { ins: input } : {}) });
    } else if (fillCm) {
      setWorkingValue({ ...workingValue, ...(input ? { cm: input } : {}) });
    } else if (fillMm) {
      setWorkingValue({ ...workingValue, ...(input ? { mm: input } : {}) });
    }

    updateMode(Mode.multiply);

    if (inputString == null && workingValue == null && totalValue != null) {
      addToProcess(totalValue);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldMultiplyNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldMultiplyImperial =
      isImperial(workingValue) && (firstToProcess == null || isImperial(firstToProcess));
    const shouldMultiplyMetric =
      isMetric(workingValue) && (firstToProcess == null || isMetric(firstToProcess));

    if (shouldMultiplyNumber) {
      addToProcess(input);
      setInputString();
      return;
    }

    if (shouldMultiplyImperial || shouldMultiplyMetric) {
      addToProcess(workingValue);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
