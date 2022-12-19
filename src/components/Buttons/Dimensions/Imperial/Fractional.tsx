import React, { useContext } from "react";

import { ValueContext } from "contexts";
import { isImperial } from "data/Value";
import { Button } from "../../Button";

export function Fractional() {
  const { input, resolution, setInput, setStored, stored } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        stored.fr.n = input;
      } else {
        setStored({
          ft: undefined,
          ins: undefined,
          fr: { n: input, d: resolution },
        });
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
