import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { ImperialValue, Units } from "../../../types";
import { isImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Fractional() {
  const { input, setInput, setStored, setUnits, stored } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        const newStored: ImperialValue = { ...stored, n: input };
        setStored(newStored);
      } else {
        setUnits(Units.imperial);
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
