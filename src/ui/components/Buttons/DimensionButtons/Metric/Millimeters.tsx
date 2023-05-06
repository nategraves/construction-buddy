import React, { useContext } from 'react';

import { isMetric } from '~/data';
import { DisplayValue } from '~/types';
import { ValueContext } from '~/contexts';
import { Button } from '~/ui';

export function Millimeters() {
  const { input, workingValue, setDisplayValue, setInputString, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isMetric(workingValue)) {
        workingValue.mm = input;
      } else {
        setWorkingValue({ mm: input });
      }
      setInputString();
      setDisplayValue(DisplayValue.workingValue);
    }
  };

  return <Button onClick={() => handleClick()}> MM </Button>;
}
