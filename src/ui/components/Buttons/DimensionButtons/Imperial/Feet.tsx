import React, { useContext } from 'react';

import { DisplayValue } from 'src/data';
import { ValueContext } from 'src/contexts';
import { isImperial } from 'src/data';
import { Button } from 'src/ui';

export function Feet() {
  const { input, workingValue, setInputString, setWorkingValue, setDisplayValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isImperial(workingValue)) {
        workingValue.ft = input;
      } else {
        setWorkingValue({ ft: input });
      }
      setInputString();
      setDisplayValue(DisplayValue.workingValue);
    }
  };

  return <Button onClick={() => handleClick()}>FT</Button>;
}
