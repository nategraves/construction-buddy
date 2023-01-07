import React, { useContext } from "react";

import { EmptyRightAngle, Mode } from "../../../../types";
import { ValueContext } from "../../../../contexts";
import { isSame, square, squareRoot, subtract } from "../../../../data";
import { Button } from "../../Button";

export const Rise = () => {
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
    const { diagonal, run } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn("Input and working value present");
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value = input ?? workingValue;

    if (
      value &&
      (isSame(value, diagonal ?? run) || (diagonal == null && run == null))
    ) {
      console.log("matches existing");
      console.log({ value });
      setRightAngle({ ...rightAngle, rise: value });
      setInputString();
      setWorkingValue();
    }

    if (diagonal != null && run != null) {
      console.log("diagonal != null && run != null && isSame(diagonal, run)");
      const diagonalSquared = square({ value: diagonal });
      const runSquared = square({ value: run });
      const riseSquared = subtract({
        value: diagonalSquared,
        toApply: runSquared,
      });
      setTotalValue(squareRoot({ value: riseSquared }));
      setRightAngle(EmptyRightAngle);
      updateMode(Mode.equals);
    }
  };

  return <Button onClick={() => handleClick()}>Rise</Button>;
};
