import { ValueContext } from "../../../contexts";
import React, { useContext } from "react";

import { Button } from "../Button";
import { Mode } from "types";

export const Equals = () => {
  const { input, mode, setInput, setMode, setStored, stored } =
    useContext(ValueContext);
  const handleClick = () => {
    if (mode === Mode.addition) {
      if (stored != null && input != null) {
        // TODO
        // const total = stored + input;
        // setStored(total);
        // setInput(total);
        // setMode();
      }
    }
  };
  return <Button onClick={() => handleClick()}>=</Button>;
};
