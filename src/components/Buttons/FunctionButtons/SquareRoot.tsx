import React, { FC, useContext } from "react";

import { Button } from "../Button";
import { Mode } from "../../../types";
import { ValueContext } from "../../../contexts";
import { squareRoot } from "../../../data";

export const SquareRoot: FC = () => {
  const {
    input,
    setInputString,
    setTotalValue,
    setWorkingValue,
    updateMode,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    updateMode(Mode.squareRoot);

    if (input != null) {
      setTotalValue(squareRoot({ value: input }));
      setInputString();
      return;
    }

    if (workingValue != null) {
      setTotalValue(squareRoot({ value: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(squareRoot({ value: totalValue }));
      return;
    }

    updateMode(Mode.equals);
  };

  return <Button onClick={() => handleClick()}>√x</Button>;
};
