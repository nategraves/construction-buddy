import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { MetricTarget } from "../../../types";
import { useIsImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Centimeters() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && useIsImperial(stored))) {
            setStored({ [MetricTarget.cm]: input });
          }
          if (stored != null && useIsImperial(stored)) {
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
