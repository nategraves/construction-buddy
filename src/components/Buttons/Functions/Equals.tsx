import { ValueContext } from "../../../contexts";
import React, { useContext } from "react";

import { Button } from "../Button";
import { Mode } from "types";

export const Equals = () => {
  // const { input, mode, setInput, setMode, setStored, stored } =
  // useContext(ValueContext);
  const handleClick = () => {
    switch (mode) {
      case Mode.addition:
        break;
      default:
    }
  };
  return <Button onClick={() => handleClick()}>=</Button>;
};
