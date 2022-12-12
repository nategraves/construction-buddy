import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import { Button } from "../Button";

export function Millimeters() {
  const { input, stored, setInput, setStored, setUnits, units } =
    useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && units === Units.imperial)) {
            setStored(input);
            setUnits(Units.metric);
          }
          if (stored != null && units === Units.metric) {
            setStored(input);
          }
          setInput(null);
        }
      }}
    >
      Millimeters
    </Button>
  );
}
