import React, { useContext } from "react";
import { isImperial } from "data/Value";
import { fraction } from "mathjs";

import { ValueContext } from "contexts";
import { Button } from "components/Buttons/Button";

export function Inches() {
  const { input, resolution, workingValue, setInput, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(workingValue)) {
        workingValue.ins = input;
      } else {
        setWorkingValue({
          ft: undefined,
          ins: input,
          fr: fraction(undefined, resolution),
        });
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>Inches</Button>;
}
