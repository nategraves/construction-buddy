import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { isSame, square, squareRoot, subtract } from "../../../../data";
import { Button } from "../../Button";

export const Rise = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setInput,
    setRightAngle,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { diagonal, run } = rightAngle;

    if (
      input == null &&
      workingValue == null &&
      diagonal != null &&
      run != null
    ) {
      const diagonalSquared = square({ value: diagonal });
      const runSquared = square({ value: run });
      const riseSquared = subtract({
        value: diagonalSquared,
        toApply: runSquared,
      });
      return squareRoot({ value: riseSquared });
    }

    const diagonalMatchesInput = diagonal == null || isSame(input, diagonal);
    const runMatchesInput = run == null || isSame(input, run);

    if (runMatchesInput && diagonalMatchesInput) {
      setRightAngle({ ...rightAngle, rise: input });
      setInput();
    }

    const diagonalMatchesWorkingValue =
      diagonal == null || isSame(workingValue, diagonal);
    const runMatchesWorkingValue = run == null || isSame(workingValue, run);

    if (runMatchesWorkingValue && diagonalMatchesWorkingValue) {
      setRightAngle({ ...rightAngle, rise: workingValue });
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>Rise</Button>;
};
