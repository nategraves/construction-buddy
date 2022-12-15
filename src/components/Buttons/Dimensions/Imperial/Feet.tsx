import React, { useContext } from "react";
import { DisplayValue, ImperialValue } from "types";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../utils/types";
import { Button } from "../../Button";

export function Feet() {
  const { input, stored, setInput, setStored, setDisplayValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.ft = input;
      } else {
        const newStored = new ImperialValue({
          ft: input,
          ins: undefined,
          n: undefined,
        });
        setStored(newStored);
      }
      setInput();
      setDisplayValue(DisplayValue.stored);
    }
  };

  return <Button onClick={() => handleClick()}>Feet</Button>;
}
