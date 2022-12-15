import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../utils/types";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const { input, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      setMode(Mode.addition);
      setStored(input);
      setInput();
      return;
    } else {
      if (isImperial(stored)) {
        if (isImperial(total)) {
          total.add(stored);
        } else {
          setTotal(stored);
        }

        setStored();
      } else if (isMetric(stored)) {
        if (isMetric(total)) {
          total.add(stored);
        } else {
          setTotal(stored);
        }
        setStored();
      } else if (isNumber(stored)) {
        setStored(stored ?? 0 + input);
        setInput(null);
      }
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
