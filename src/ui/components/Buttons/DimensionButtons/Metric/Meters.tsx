import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { isMetric } from 'src/data';
import { Button } from 'src/ui';

export function Meters() {
  const { input, workingValue, setInputString, setWorkingValue } = useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isMetric(workingValue)) {
        workingValue.m = input;
      } else {
        setWorkingValue({ m: input });
      }
      setInputString();
    }
  };

  return <Button onClick={() => handleClick()}>M</Button>;
}
