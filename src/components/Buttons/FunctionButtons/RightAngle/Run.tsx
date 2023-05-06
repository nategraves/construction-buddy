import React, { useContext } from 'react';

import { ValueContext } from '~/contexts';
import { isSame, square, squareRoot, subtract } from '~/data';
import { Mode, EmptyRightAngle } from '~/types';
import { Button } from '~/ui';

export const Run = () => {
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
    const { diagonal, rise } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn('Input and working value present');
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value = input ?? workingValue;

    if (value && (isSame(value, diagonal ?? rise) || (diagonal == null && rise == null))) {
      console.log('matches existing');
      console.log({ value });
      setRightAngle({ ...rightAngle, run: value });
      setInputString();
      setWorkingValue();
    }

    if (diagonal != null && rise != null) {
      console.log('diagonal != null && rise != null && isSame(diagonal, rise)');
      const diagonalSquared = square({ value: diagonal });
      const riseSquared = square({ value: rise });
      const runSquared = subtract({
        value: diagonalSquared!,
        toApply: riseSquared!,
      });
      setTotalValue(squareRoot({ value: runSquared! }));
      setRightAngle(EmptyRightAngle);
      updateMode(Mode.equals);
    }
  };

  return <Button onClick={() => handleClick()}>Run</Button>;
};
