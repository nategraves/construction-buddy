import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const {
    inputString,
    toProcess,
    totalValue,
    workingValue,
    setInputString,
    setTotalValue,
    setToProcess,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString != null) {
      setInputString();
      return;
    }
    if (workingValue) {
      setWorkingValue();
      return;
    }
    if (toProcess.length) {
      setToProcess([]);
      return;
    }
    if (totalValue) {
      setTotalValue();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
