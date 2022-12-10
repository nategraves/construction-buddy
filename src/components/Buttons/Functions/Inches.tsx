import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { useIsImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Inches() {
  const { input, stored, setInput, setStored, setUnits } =
    useContext(ValueContext);
  const isImperial = useIsImperial();

  const handleClick = () => {
    if (input != null) {
      if (isImperial) {
      } else {
        setStored(input);
      }
      if (isImperial) {
        setStored(input);
        setUnits(Units.imperial);
      } else {
        setStored(stored ?? 0 + input);
      }
      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> Inches </Button>;
}
