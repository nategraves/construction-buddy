import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Clear = () => {
  const { input, setInput, setStored, stored } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      setInput();
    } else if (stored != null) {
      setStored();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
