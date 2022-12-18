import React, { useContext } from "react";
import { DisplayValue } from "types";

import { ValueContext } from "contexts";
import { isImperial } from "data/Value";
import { Button } from "../../Button";

export function Feet() {
  const { input, stored, setInput, setStored, setDisplayValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.ft = input;
      } else {
        setStored({ ft: input });
      }
      setInput();
      setDisplayValue(DisplayValue.stored);
    }
  };

  return <Button onClick={() => handleClick()}>Feet</Button>;
}
