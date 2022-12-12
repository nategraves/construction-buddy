import React, { useContext, FC } from "react";
// import { Mode } from "types";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const {
    input,
    // setInput,
    // setMode,
    //setStored,
    // stored
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      throw new Error("TODO: Add functionality");
      // setStored(input ?? 0 + stored ?? 0);
      // setInput(null);
      // setMode(Mode.addition);
    }
  };

  return <Button onClick={() => handleClick()}>+</Button>;
};
