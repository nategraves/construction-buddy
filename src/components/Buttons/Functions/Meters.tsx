import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { MetricTarget } from "../../../types";
import { isImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Meters() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isImperial(stored))) {
            setStored({ [MetricTarget.m]: input });
          }
          if (stored != null && isImperial(stored)) {
            setStored({ ...stored, [MetricTarget.m]: input });
          }
          setInput(null);
        }
      }}
    >
      Meters
    </Button>
  );
}
