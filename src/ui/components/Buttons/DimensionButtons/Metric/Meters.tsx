import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { DisplayValue } from 'src/data';
import { isMetric } from 'src/data';
import { Button } from 'src/ui';

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
