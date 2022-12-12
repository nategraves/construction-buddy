import React, { useContext } from "react";
import { useIsImperial } from "utils/types";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { Button } from "../Button";

export function Inches() {
  const { input, stored, setInput, setStored, setUnits } =
    useContext(ValueContext);

  const isImperial = useIsImperial();

  const handleClick = () => {
    if (input != null) {
      if (isImperial) {
        setStored(stored ?? 0 + input);
      } else {
        setUnits(Units.imperial);
        setStored(input);
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>Inches</Button>;
}
