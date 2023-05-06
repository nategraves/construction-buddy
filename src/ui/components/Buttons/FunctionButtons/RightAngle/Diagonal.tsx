import React, { useContext } from 'react';

import { ValueContext } from '~/contexts';
import { add, isSame, square, squareRoot } from '~/data';
import { Mode } from '~/types';
import { Button } from '~/ui';

export const Diagonal = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setError,
    setInput,
    setRightAngle,
    setTotalValue,
    setWorkingValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { rise, run } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn('Input and working value present');
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const riseMatchesInput = rise == null || isSame(input, rise);
    const runMatchesInput = run == null || isSame(input, run);

    if (runMatchesInput && riseMatchesInput) {
      setRightAngle({ ...rightAngle, rise: input });
      setInput();
    }

    const riseMatchesWorkingValue = rise == null || isSame(workingValue, rise);
    const runMatchesWorkingValue = run == null || isSame(workingValue, run);

    if (runMatchesWorkingValue && riseMatchesWorkingValue) {
      setRightAngle({ ...rightAngle, rise: workingValue });
      setWorkingValue();
    }

    if (rise != null && run != null && isSame(rise, run)) {
      const riseSquared = square({ value: rise });
      const runSquared = square({ value: run });
      const diagonalSquared = add({ value: riseSquared!, toApply: runSquared! });
      setTotalValue(squareRoot({ value: diagonalSquared }));
      setRightAngle({ rise: undefined, run: undefined, diagonal: undefined });
      updateMode(Mode.equals);
    }
  };

  return <Button onClick={() => handleClick()}>Diagonal</Button>;
};
