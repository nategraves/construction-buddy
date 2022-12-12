import React, { useContext, useState } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { useIsImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Fractional() {
  const [numerator, setNumerator] = useState<Maybe<number>>();
  const { input, stored, setInput, setStored, setUnits, units } =
    useContext(ValueContext);
  const isImperial = useIsImperial();

  const handleClick = () => {
    if (input != null) {
      if (numerator != null) {
        setStored(stored ?? +(numerator / input));
      } else {
        setNumerator(input);
      }

      if (!isImperial) {
        setUnits(Units.imperial);
      }
      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
