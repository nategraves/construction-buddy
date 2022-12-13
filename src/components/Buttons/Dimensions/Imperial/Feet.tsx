import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../utils/types";
import { Button } from "../../Button";

export function Feet() {
  const { input, stored, setInput, setStored } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(stored)) {
        setStored({ ...stored, ft: input });
      } else {
        setStored({ ft: input, ins: undefined, n: undefined });
      }
      setInput();
    }
  };

  return <Button onClick={() => handleClick()}>Feet</Button>;
}
