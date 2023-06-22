import React, { useState, useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Fraction, isImperial } from 'src/data';
import { Button, FractionDisplay } from 'src/ui';

export function Fractional() {
  const [numerator, setNumerator] = useState<number | undefined>();
  const { input, resolution, setInputString, setWorkingValue, workingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null) {
      return;
    }

    const denominator = resolution ?? input;

    if (denominator == null) {
      return;
    }

    if (isImperial(workingValue)) {
      setWorkingValue({
        ...workingValue,
        ins: workingValue.ins ?? 0,
        fr: new Fraction(input, denominator),
      });
    } else {
      setWorkingValue({
        ft: 0,
        ins: 0,
        fr: new Fraction(input, denominator),
      });
    }

    if (numerator == null) {
      setNumerator(input);
    }

    setInputString();
  };

  return (
    <Button onClick={() => handleClick()}>
      Fraction
      {/* <FractionDisplay d={resolution} displayNPlaceholder={true} /> */}
    </Button>
  );
}
