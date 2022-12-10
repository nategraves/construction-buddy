import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { ImperialTarget, Units } from "../../../types";
import { useIsImperial, useIsMetric } from "../../../utils/types";
import { Button } from "../Button";

export function Feet() {
  const { input, stored, setInput, setStored, setUnits } =
    useContext(ValueContext);
  const isMetric = useIsMetric();
  const isImperial = useIsImperial();

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isMetric)) {
            setStored(input);
            setUnits(Units.imperial);
          }

          if (stored != null && isImperial) {
            setStored(input * 12);
          }
          setInput(null);
        }
      }}
    >
      Feet
    </Button>
  );
}
