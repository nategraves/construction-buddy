import React, { useContext, FC } from "react";
import { subtract, isImperial, isMetric, isNumber } from "data/Value";
import { Mode } from "types";

import { ValueContext } from "contexts";
import { Button } from "../Button";

export const Subtract: FC = () => {
  const {
    input,
    setInput,
    updateMode,
    setWorkingValue,
    setTotalValue,
    workingValue,
    totalValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null) {
      return;
    }

    updateMode(Mode.subtract);

    if (isNumber(input)) {
      setInput();
      if (isNumber(totalValue)) {
        throw new Error("Todo");
        // setTotalValue(input + totalValue);
      } else {
        setWorkingValue(input);
      }
      return;
    }

    if (isImperial(workingValue)) {
      if (isImperial(totalValue)) {
        setTotalValue(
          subtract({ value: totalValue, toSubtract: workingValue })
        );
      } else {
        setTotalValue(workingValue);
      }

      setWorkingValue();
    }

    if (isMetric(workingValue)) {
      if (isMetric(totalValue)) {
        setTotalValue(
          subtract({ value: totalValue, toSubtract: workingValue })
        );
      } else {
        setTotalValue(workingValue);
      }
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>-</Button>;
};
