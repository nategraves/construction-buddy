import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { ImperialTarget } from "../../../types";
import { isImperial, isMetric } from "../../../utils/types";
import { Button } from "../Button";

export function Fractional() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  return (
    <Button
      onClick={() => {
        if (input != null) {
          if (stored == null || (stored != null && isMetric(stored))) {
            setStored({ [ImperialTarget.n]: input });
          }
          if (stored != null && isImperial(stored)) {
            const key =
              stored[ImperialTarget.n] == null
                ? ImperialTarget.n
                : ImperialTarget.d;
            setStored({ ...stored, [key]: input });
          }
          setInput(null);
        }
      }}
    >
      /
    </Button>
  );
}
