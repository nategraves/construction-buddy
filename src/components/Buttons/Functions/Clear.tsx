import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const { input, setInput, setWorkingValue, workingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      setInput();
    } else if (workingValue != null) {
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
