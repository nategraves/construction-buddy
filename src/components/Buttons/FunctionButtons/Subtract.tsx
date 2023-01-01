import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Subtract: FC = () => {
  const {
    input,
    setInputString,
    updateMode,
    setWorkingValue,
    setTotalValue,
    setToProcess,
    workingValue,
    totalValue,
    toProcess,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.subtract);

    if (input == null && workingValue == null && totalValue !== null) {
      setToProcess([totalValue]);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldSubtractNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldSubtractImperial =
      isImperial(workingValue) &&
      (firstToProcess == null || isImperial(firstToProcess));
    const shouldSubtractMetric =
      isMetric(workingValue) &&
      (firstToProcess == null || isMetric(firstToProcess));

    if (shouldSubtractNumber) {
      setToProcess([...toProcess, input]);
      setInputString();
      return;
    }

    if (shouldSubtractImperial || shouldSubtractMetric) {
      setToProcess([...toProcess, workingValue]);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>-</Button>;
};
