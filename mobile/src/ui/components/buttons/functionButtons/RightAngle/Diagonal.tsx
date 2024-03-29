import React, { useContext } from 'react';
import { Text } from 'react-native';

import { ValueContext } from 'src/contexts';
// import  { add, isSame, square } from 'src/data';
import { isSame } from 'src/data';
import { Button } from 'src/ui';

export const Diagonal = () => {
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
    const { rise, run } = rightAngle;

    if (input != null && workingValue != null) {
      console.warn('Input and working value present');
      setError(`Please apply ${input} to your working value`);
      return;
    }

    const value = input ?? workingValue;

    if (
      value &&
      (isSame(value, rise ?? run) || (rise == null && run == null))
    ) {
      console.log('matches existing');
      console.log({ value });
      setRightAngle({ ...rightAngle, diagonal: value });
      setInputString();
      setWorkingValue(undefined);
    }

    if (rise != null && run != null) {
      console.log('rise != null && run != null && isSame(rise, run)');
      // const riseSquared = square({ value: rise });
      // const runSquared = square({ value: run });
      // const diagonalSquared = add({ value: riseSquared!, toApply: runSquared! });
      // setRightAngle({ rise: undefined, run: undefined, diagonal: undefined });
    }
  };

  return <Button onPress={() => handleClick()}>Diagonal</Button>;
};
