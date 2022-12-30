import React, { useContext } from "react";

import { DisplayValue } from "../../../../types";
import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../data/Value";
import { Button } from "../../Button";

export function Feet() {
  const {
    input,
    workingValue,
    setInputArray: setInput,
    setWorkingValue,
    setDisplayValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(workingValue)) {
        workingValue.ft = input;
      } else {
        setWorkingValue({ ft: input });
      }
      setInput();
      setDisplayValue(DisplayValue.workingValue);
    }
  };

  return <Button onClick={() => handleClick()}>FT</Button>;
}
