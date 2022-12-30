import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Multiply: FC = () => {
  const {
    input,
    setInput,
    setToProcess,
    setTotalValue,
    setWorkingValue,
    updateMode,
    toProcess,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.multiply);

    if (input == null && workingValue == null && totalValue !== null) {
      setToProcess([totalValue]);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldDivideNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldDivideImperial =
      isImperial(workingValue) &&
      (firstToProcess == null || isImperial(firstToProcess));
    const shouldDivideMetric =
      isMetric(workingValue) &&
      (firstToProcess == null || isMetric(firstToProcess));

    if (shouldDivideNumber) {
      setToProcess([...toProcess, input]);
      setInput();
      return;
    }

    if (shouldDivideImperial || shouldDivideMetric) {
      setToProcess([...toProcess, workingValue]);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
