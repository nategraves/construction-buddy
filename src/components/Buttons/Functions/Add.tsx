import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const {
    input,
    setInput,
    updateMode,
    setWorkingValue,
    setTotalValue,
    workingValue,
    totalValue,
    toProcess,
    setToProcess,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.add);

    if (input == null && workingValue == null && totalValue !== null) {
      setToProcess([totalValue]);
      setTotalValue();
      return;
    }

    const [firstToProcess] = toProcess;

    const shouldAddNumber =
      isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
    const shouldAddImperial =
      isImperial(workingValue) &&
      (firstToProcess == null || isImperial(firstToProcess));
    const shouldAddMetric =
      isMetric(workingValue) &&
      (firstToProcess == null || isMetric(firstToProcess));

    if (shouldAddNumber) {
      setToProcess([...toProcess, input]);
      setInput();
      return;
    }

    if (shouldAddImperial || shouldAddMetric) {
      setToProcess([...toProcess, workingValue]);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
