import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const {
    inputString,
    setInputString,
    setTotalValue,
    setWorkingValue,
    workingValue,
    totalValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString != null) {
      setInputString();
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
