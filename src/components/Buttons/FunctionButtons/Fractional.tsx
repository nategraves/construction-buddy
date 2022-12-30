import React, { useContext, useState } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { useIsImperial } from "../../../hooks";
import { Button } from "../Button";

export function Fractional() {
  const [numerator, setNumerator] = useState<Maybe<number>>();
  const { input, workingValue, setInput, setWorkingValue, setUnits } =
    useContext(ValueContext);
  const isImperial = useIsImperial();

  const handleClick = () => {
    if (input != null) {
      if (numerator != null) {
        setWorkingValue(workingValue ?? +(numerator / input));
      } else {
        setNumerator(input);
      }

      if (!isImperial) {
        setUnits(Units.imperial);
      }
      setInput();
    }
  };

  return <Button onClick={() => handleClick()}>X/Y</Button>;
}