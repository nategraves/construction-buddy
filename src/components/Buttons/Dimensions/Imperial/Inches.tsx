import React, { useContext } from "react";
import { isImperial } from "data/Value";
import { fraction } from "mathjs";

import { ValueContext } from "contexts";
import { Button } from "components/Buttons/Button";

export function Inches() {
  const { input, resolution, stored, setInput, setStored } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.ins = input;
      } else {
        setStored({
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
