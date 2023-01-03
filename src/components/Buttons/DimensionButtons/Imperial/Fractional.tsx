import React, { useState, useContext } from "react";
import { fraction } from "mathjs";

import { ValueContext } from "../../../../contexts";
import { isImperial } from "../../../../data/Value";
import { Button } from "../../Button";

export function Fractional() {
  const [numerator, setNumerator] = useState<Maybe<number>>();
  const { input, resolution, setInputString, setWorkingValue, workingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null) {
      return;
    }

    if (numerator == null) {
      setNumerator(input);
      setInputString();
      return;
    }

    const denominator = resolution ?? input;

    if (!denominator) {
      return;
    }

    if (isImperial(workingValue)) {
      setWorkingValue({
        ...workingValue,
        ins: workingValue.ins ?? 0,
        fr: fraction(numerator, denominator),
      });
    } else {
      setWorkingValue({
        ft: 0,
        ins: 0,
        fr: fraction(numerator, denominator),
      });
    }

    setInputString();
  };

  return <Button onClick={() => handleClick()}>X / Y</Button>;
}
