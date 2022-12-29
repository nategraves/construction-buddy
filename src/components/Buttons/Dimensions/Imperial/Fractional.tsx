import React, { useContext } from "react";
import { fraction } from "mathjs";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../data/Value";
import { Button } from "../../Button";

export function Fractional() {
  const { input, resolution, setInput, setWorkingValue, workingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(workingValue)) {
        workingValue.fr.n = input;
      } else {
        setWorkingValue({
          ft: undefined,
          ins: undefined,
          fr: fraction(input, resolution),
        });
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>X / Y</Button>;
}
