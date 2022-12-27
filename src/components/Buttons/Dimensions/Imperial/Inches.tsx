import React, { useContext } from "react";

import { isImperial } from "../../../../data/Value";
import { ValueContext } from "../../../../contexts";
import { Button } from "../../../../components/Buttons/Button";

export function Inches() {
  const { input, workingValue, setInput, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(workingValue)) {
        workingValue.ins = input;
        setWorkingValue({ ...workingValue });
      } else {
        setWorkingValue({
          ft: 0,
          ins: input,
        });
      }

      setInput(null);
    }
  };

  return <Button onClick={() => handleClick()}>INS</Button>;
}
