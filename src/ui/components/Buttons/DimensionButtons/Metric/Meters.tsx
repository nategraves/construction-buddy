import React, { useContext } from 'react';

import { ValueContext } from '~/contexts';
import { DisplayValue } from '~/types';
import { isMetric } from '~/data';
import { Button } from '~/ui';

export function Meters() {
  const { input, workingValue, setInputString, setWorkingValue, setDisplayValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isMetric(workingValue)) {
        workingValue.m = input;
      } else {
        setWorkingValue({ m: input });
      }
      setInputString();
      setDisplayValue(DisplayValue.workingValue);
    }
  };

  return <Button onClick={() => handleClick()}>M</Button>;
}
