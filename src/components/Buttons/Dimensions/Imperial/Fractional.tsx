import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../utils/types";
import { Button } from "../../Button";

export function Fractional() {
  const { input, setInput, setStored, stored } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        setStored({ ...stored, n: input });
      } else {
        setStored({ ft: undefined, ins: undefined, n: input });
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}> / </Button>;
}
