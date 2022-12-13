import React, { useContext } from "react";
import { ImperialValue } from "types";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../utils/types";
import { Button } from "../../Button";

export function Fractional() {
  const { input, setInput, setStored, stored } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.n = input;
      } else {
        setStored(
          new ImperialValue({ ft: undefined, ins: undefined, n: input })
        );
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
