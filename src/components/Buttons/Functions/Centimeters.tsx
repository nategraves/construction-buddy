import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { Button } from "../Button";

export function Centimeters() {
  const { input, stored, setInput, setStored, setUnits, units } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (units === Units.metric) {
        setStored(input + stored ?? 0);
      } else {
        setUnits(Units.metric);
        setStored(input);
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>Centimeters</Button>;
}
