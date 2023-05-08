import React, { useContext } from 'react';

import { isMetric } from 'src/data';
import { DisplayValue } from 'src/data';
import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export function Centimeters() {
  const { input, workingValue, setDisplayValue, setInputString, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isMetric(workingValue)) {
        workingValue.cm = input;
      } else {
        setWorkingValue({ cm: input });
      }
      setInputString();
      setDisplayValue(DisplayValue.workingValue);
    }
  };

  return <Button onClick={() => handleClick()}>CM</Button>;
}
