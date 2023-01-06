import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../../data/Value";
import { Mode } from "../../../../types";

import { ValueContext } from "../../../../contexts";
import { Button } from "../../Button";

export const Add: FC = () => {
  const {
    input,
    totalValue,
    toProcess,
    workingValue,
    setInputString,
    addToProcess,
    setTotalValue,
    setWorkingValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.add);

    if (input == null && workingValue == null && totalValue != null) {
      addToProcess(totalValue);
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
      addToProcess(input);
      setInputString();
      return;
    }

    if (shouldAddImperial || shouldAddMetric) {
      addToProcess(workingValue);
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
