import React, { useContext } from "react";
import { ValueContext } from "../../../contexts";

import { Button } from "../Button";

export function MemoryAdd() {
  const {
    input,
    totalValue,
    workingValue,
    addMemory,
    setInput,
    setTotalValue,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && totalValue == null && workingValue) {
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

    if (totalValue != null) {
      addMemory(totalValue);
      setTotalValue();
      return;
    }
  };

  return <Button onClick={() => handleClick()}>M+</Button>;
}
