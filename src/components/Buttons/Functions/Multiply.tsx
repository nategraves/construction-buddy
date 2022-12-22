import React, { useContext, FC } from "react";
import { multiply, isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Multiply: FC = () => {
  const { input, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && stored == null) {
      return;
    }

    setMode(Mode.multiply);

    if (isNumber(input)) {
      setInput();
      if (isNumber(total)) {
        throw new Error("Todo");
        // setTotal(input + total);
      } else {
        setStored(input);
      }
      return;
    }

    if (isImperial(stored)) {
      if (isImperial(total)) {
        setTotal(multiply({ value: total, toMultiply: stored }));
      } else {
        setTotal(stored);
      }

      setStored();
    }

    if (isMetric(stored)) {
      if (isMetric(total)) {
        setTotal(multiply({ value: total, toMultiply: stored }));
      } else {
        setTotal(stored);
      }
      setStored();
    }
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
