import React, { useContext, FC } from "react";
import { divide, isImperial, isMetric, isNumber } from "../../../data/Value";
import { Mode } from "../../../types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Divide: FC = () => {
  const { input, setInput, updateMode, setStored, setTotal, stored, total } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && stored == null) {
      return;
    }

    updateMode(Mode.divide);

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
        setTotal(divide({ value: total, toDivide: stored }));
      } else {
        setTotal(stored);
      }

      setStored();
    }

    if (isMetric(stored)) {
      if (isMetric(total)) {
        setTotal(divide({ value: total, toDivide: stored }));
      } else {
        setTotal(stored);
      }
      setStored();
    }
  };

  return <Button onClick={() => handleClick()}>/</Button>;
};
