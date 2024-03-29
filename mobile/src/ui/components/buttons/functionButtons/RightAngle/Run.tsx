import React, { useContext } from 'react';
import { Text } from 'react-native';

import { ValueContext } from 'src/contexts';
// import { isSame, square, squareRoot, subtract } from 'src/data';
import { isSame } from 'src/data';
// import { EmptyRightAngle } from 'src/data';
import { Button } from 'src/ui';

export const Run = () => {
  const {
    input,
    rightAngle,
    workingValue,
    setError,
    setInputString,
    setRightAngle,
    setWorkingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    const { diagonal, rise } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn('Input and working value present');
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value = input ?? workingValue;

    if (
      (value && diagonal && isSame(value, diagonal)) ||
      (value && rise && isSame(value, rise)) ||
      (diagonal == null && rise == null)
    ) {
      console.log('matches existing');
      console.log({ value });
      setRightAngle({ ...rightAngle, run: value });
      setInputString();
      setWorkingValue();
    }

    if (diagonal != null && rise != null) {
      console.log('diagonal != null && rise != null && isSame(diagonal, rise)');
      // const diagonalSquared = square({ value: diagonal });
      // const riseSquared = square({ value: rise });
      // const runSquared = subtract({
      //   value: diagonalSquared!,
      //   toApply: riseSquared!,
      // });
      // setRightAngle(EmptyRightAngle);
    }
  };

  return <Button onPress={() => handleClick()}>Run</Button>;
};
