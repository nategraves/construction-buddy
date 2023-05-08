import React, { useState, useContext } from 'react';
import { fraction } from 'mathjs';

import { ValueContext } from 'src/contexts';
import { isImperial } from 'src/data';
import { Button, FractionDisplay } from 'src/ui';

export function Fractional() {
  const [numerator, setNumerator] = useState<number | undefined>();
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

  return (
    <Button onClick={() => handleClick()}>
      <FractionDisplay d={resolution} />
    </Button>
  );
}
