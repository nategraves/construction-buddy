import React, { useContext } from "react";
import { ValueContext } from "../../../contexts";

import { Button } from "../Button";

export function MemoryAdd() {
  const { input, workingValue, addMemory, setInput, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null) {
      return;
    }

    if (input != null) {
      addMemory(input);
      setInput();
      return;
    }

    if (workingValue != null) {
      addMemory(workingValue);
      setWorkingValue();
      return;
    }
  };

  return <Button onClick={() => handleClick()}>M+</Button>;
}
