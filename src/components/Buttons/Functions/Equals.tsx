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
          console.log("Adding imperials");
          total.add(stored);
          setStored();
        }

        if (isMetric(total) && isMetric(stored)) {
          console.log("Adding metrics");
          total.add(stored);
          setStored();
        }

        if (isNumber(stored) && isNumber(input)) {
          console.log("Adding numbers");
          setTotal(input + stored);
          setStored();
          setInput();
        }

        break;
      default:
    }

    setMode(Mode.equals);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
