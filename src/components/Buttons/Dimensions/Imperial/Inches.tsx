import React, { useContext } from "react";
import { ImperialValue } from "types";
import { isImperial } from "utils/types";

import { ValueContext } from "../../../../contexts";
import { Button } from "../../Button";

export function Inches() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.ins = input;
      } else {
        setStored(
          new ImperialValue({ ft: undefined, ins: input, n: undefined })
        );
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>Inches</Button>;
}
