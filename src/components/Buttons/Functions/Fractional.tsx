import React, { useContext, useState } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { useIsImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Fractional() {
  const [numerator, setNumerator] = useState<Maybe<number>>();
  const { input, stored, setInput, setStored, setUnits } =
    useContext(ValueContext);
  const isImperial = useIsImperial();

  const handleClick = () => {
    if (input != null) {
      if (!isImperial) {
        setUnits(Units.imperial);
      }
      if (numerator != null) {
        setStored(stored ?? +(numerator / input));
      } else {
        setNumerator(input);
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
