import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { ImperialTarget } from "../../../types";
import { isImperial, isMetric } from "../../../utils/types";
import { Button } from "../Button";

export function Inches() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isMetric(stored))) {
            setStored({ [ImperialTarget.in]: input });
          }
          if (stored != null && isImperial(stored)) {
            setStored({ ...stored, [ImperialTarget.in]: input });
          }
          setInput(null);
        }
      }}
    >
      Inches
    </Button>
  );
}
