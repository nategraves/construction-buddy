import React, { useContext, FC } from "react";
import { square } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Square: FC = () => {
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

    updateMode(Mode.square);

    if (input != null) {
      setTotalValue(square({ value: input }));
      setInputString();
      return;
    }

    if (workingValue != null) {
      setTotalValue(square({ value: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(square({ value: totalValue }));
      return;
    }

    updateMode(Mode.equals);
  };

  return (
    <Button onClick={() => handleClick()}>
      <span>
        x<sup>2</sup>
      </span>
    </Button>
  );
};
