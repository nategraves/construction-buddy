import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const {
    input,
    setInput,
    setTotalValue,
    setWorkingValue,
    workingValue,
    totalValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      setInput();
      return;
    } else if (workingValue != null) {
      setWorkingValue();
      return;
    } else if (totalValue != null) {
      setTotalValue();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
