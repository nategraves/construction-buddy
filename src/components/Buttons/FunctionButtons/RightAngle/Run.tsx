import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { isSame, square, squareRoot, subtract } from "../../../../data";
import { Button } from "../../Button";

export const Run = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setInput,
    setRightAngle,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { diagonal, rise } = rightAngle;

    if (
      input == null &&
      workingValue == null &&
      diagonal != null &&
      rise != null
    ) {
      const diagonalSquared = square({ value: diagonal });
      const riseSquared = square({ value: rise });
      const runSquared = subtract({
        value: diagonalSquared,
        toApply: riseSquared,
      });
      return squareRoot({ value: runSquared });
    }

    const diagonalMatchesInput = diagonal == null || isSame(input, diagonal);
    const riseMatchesInput = rise == null || isSame(input, rise);

    if (riseMatchesInput && diagonalMatchesInput) {
      setRightAngle({ ...rightAngle, run: input });
      setInput();
    }

    const diagonalMatchesWorkingValue =
      diagonal == null || isSame(workingValue, diagonal);
    const riseMatchesWorkingValue = rise == null || isSame(workingValue, rise);

    if (riseMatchesWorkingValue && diagonalMatchesWorkingValue) {
      setRightAngle({ ...rightAngle, run: workingValue });
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>Run</Button>;
};
