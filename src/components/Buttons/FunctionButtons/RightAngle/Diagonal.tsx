import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { add, isSame, square, squareRoot, Value } from "../../../../data";
import { Button } from "../../Button";

export const Diagonal = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setError,
    setInput,
    setRightAngle,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { rise, run } = rightAngle;

    if (input != null && workingValue != null) {
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value: Value = input ?? workingValue;

    const riseMatchesInput = isSame(input, rise);
    const runMatchesInput = isSame(input, run);
    const riseMatchesWorkingValue = rise == null || isSame(workingValue, rise);
    const runMatchesWorkingValue = run == null || isSame(workingValue, run);

    const riseMatchesOne = riseMatchesInput || riseMatchesWorkingValue;

    if (value != null && riseMatchesOne != null && run != null) {
      const riseSquared = square({ value: rise });
      const runSquared = square({ value: run });
      const diagonalSquared = add({ value: riseSquared, toApply: runSquared });
      return squareRoot({ value: diagonalSquared });
    }

    if (riseMatchesInput && runMatchesInput) {
      setRightAngle({ ...rightAngle, diagonal: input });
      setInput();
    }

    if (
      (rise == null || riseMatchesWorkingValue) &&
      (run == null || runMatchesWorkingValue)
    ) {
      setRightAngle({ ...rightAngle, diagonal: workingValue });
      setWorkingValue();
    }
  };

  return <Button onClick={() => handleClick()}>Diagonal</Button>;
};
