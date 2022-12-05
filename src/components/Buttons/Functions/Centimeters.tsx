import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { MetricTarget } from "../../../types";
import { isImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Centimeters() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isImperial(stored))) {
            setStored({ [MetricTarget.cm]: input });
          }
          if (stored != null && isImperial(stored)) {
            setStored({ ...stored, [MetricTarget.cm]: input });
          }
          setInput(null);
        }
      }}
    >
      Centimeters
    </Button>
  );
}
