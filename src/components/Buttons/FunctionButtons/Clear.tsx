import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const { setInputString, setTotalValue, setToProcess, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    setInputString();
    setToProcess([]);
    setWorkingValue();
    setTotalValue();
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
