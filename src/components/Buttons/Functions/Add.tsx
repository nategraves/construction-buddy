import React, { useContext, FC } from "react";
import { isImperial, isMetric } from "utils/types";
import { Mode } from "types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const { input, setInput, setMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);

  const handleClick = () => {
    if (isImperial(stored)) {
      setMode(Mode.addition);
      if (isImperial(total)) {
        total.add(stored);
      } else {
        setTotal(stored);
      }

      setStored();
    }

    if (isMetric(stored)) {
      setMode(Mode.addition);
      if (isMetric(total)) {
        total.add(stored);
      } else {
        setTotal(stored);
      }
      setStored();
    }

    if (typeof stored === "number" && typeof input === "number") {
      setMode(Mode.addition);
      setStored(stored + input);
      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
