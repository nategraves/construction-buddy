import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { add, isSame, square, squareRoot } from "../../../../data";
import { Mode } from "../../../../types";
import { Button } from "../../Button";

export const Diagonal = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setError,
    setInputString,
    setRightAngle,
    setTotalValue,
    setWorkingValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { rise, run } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn("Input and working value present");
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value = input ?? workingValue;

    if (
      value &&
      (isSame(value, rise ?? run) || (rise == null && run == null))
    ) {
      console.log("matches existing");
      console.log({ value });
      setRightAngle({ ...rightAngle, diagonal: value });
      setInputString();
      setWorkingValue(undefined);
    }

    if (rise != null && run != null) {
      console.log("rise != null && run != null && isSame(rise, run)");
      const riseSquared = square({ value: rise });
      const runSquared = square({ value: run });
      const diagonalSquared = add({ value: riseSquared, toApply: runSquared });
      setTotalValue(squareRoot({ value: diagonalSquared }));
      setRightAngle({ rise: undefined, run: undefined, diagonal: undefined });
      updateMode(Mode.equals);
    }
  };

  return <Button onClick={() => handleClick()}>Diagonal</Button>;
};
