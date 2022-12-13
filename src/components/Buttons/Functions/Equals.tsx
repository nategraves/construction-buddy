import { ValueContext } from "../../../contexts";
import React, { useContext } from "react";

import { Button } from "../Button";
import { Mode } from "../../../types";
import { isImperial, isMetric, isNumber } from "../../../utils/types";

export const Equals = () => {
  const { input, mode, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);
  const handleClick = () => {
    switch (mode) {
      case Mode.addition:
        if (isImperial(total) && isImperial(stored)) {
          total.add(stored);
          setStored();
        }

        if (isMetric(total) && isMetric(stored)) {
          total.add(stored);
          setStored();
        }

        if (isNumber(input) && isNumber(stored)) {
          setTotal(input + stored);
          setInput();
        }

        setMode();
        break;
      default:
    }
  };
  return <Button onClick={() => handleClick()}>=</Button>;
};
