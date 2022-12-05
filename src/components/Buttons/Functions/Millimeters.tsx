import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { MetricTarget } from "../../../types";
import { isImperial } from "../../../utils/types";
import { Button } from "../Button";

export function Millimeters() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isImperial(stored))) {
            setStored({ [MetricTarget.mm]: input });
          }
          if (stored != null && isImperial(stored)) {
            setStored({ ...stored, [MetricTarget.mm]: input });
          }
          setInput(null);
        }
      }}
    >
      Millimeters
    </Button>
  );
}
