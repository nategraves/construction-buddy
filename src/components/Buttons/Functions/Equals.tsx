import { ValueContext } from "../../../contexts";
import React, { useContext } from "react";

import { Button } from "../Button";
import { Mode } from "../../../types";
import { add, isImperial, isMetric, isNumber } from "../../../data/Value";

export const Equals = () => {
  const { input, mode, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);
  const handleClick = () => {
    switch (mode) {
      case Mode.add:
        if (isImperial(total) && isImperial(stored)) {
          console.log("Adding imperials");
          const newTotal = add(total, stored);
          console.log({ newTotal });
          setTotal(newTotal);
          setStored();
        }

        if (isMetric(total) && isMetric(stored)) {
          console.log("Adding metrics");
          setTotal(add(total, stored));
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
