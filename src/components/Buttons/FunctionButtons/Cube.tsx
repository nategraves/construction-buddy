import React, { useContext, FC } from "react";
import { multiply, isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Cube: FC = () => {
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

    updateMode(Mode.cube);

    if (input != null) {
      setTotalValue(multiply({ value: input, toApply: input }));
      setInput();
      return;
    }

    if (workingValue != null) {
      setTotalValue(multiply({ value: workingValue, toApply: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(multiply({ value: totalValue, toApply: totalValue }));
      return;
    }
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
