import React, { useContext, FC } from "react";
import { isImperial, isMetric, isNumber } from "../../../utils/types";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const { input, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && stored == null) {
      return;
    }

    setMode(Mode.addition);

    if (isNumber(input)) {
      setInput();
      if (isNumber(total)) {
        setTotal(input + total);
      } else {
        setStored(input);
      }
      return;
    }

    if (isImperial(stored)) {
      if (isImperial(total)) {
        total.add(stored);
      } else {
        setTotal(stored);
      }

      setStored();
    }

    if (isMetric(stored)) {
      if (isMetric(total)) {
        total.add(stored);
      } else {
        setTotal(stored);
      }
      setStored();
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
