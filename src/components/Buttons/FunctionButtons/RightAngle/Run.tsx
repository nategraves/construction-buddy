import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { isSame, square, squareRoot, subtract } from "../../../../data";
import { Mode, EmptyRightAngle } from "../../../../types";
import { Button } from "../../Button";

export const Run = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setInput,
    setRightAngle,
    setTotalValue,
    setWorkingValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { diagonal, rise } = rightAngle;

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

    if (diagonal != null && rise != null && isSame(diagonal, rise)) {
      const diagonalSquared = square({ value: diagonal });
      const riseSquared = square({ value: rise });
      const runSquared = subtract({
        value: diagonalSquared,
        toApply: riseSquared,
      });
      setTotalValue(squareRoot({ value: runSquared }));
      setRightAngle(EmptyRightAngle);
      updateMode(Mode.equals);
    }
  };

  return <Button onClick={() => handleClick()}>Run</Button>;
};
