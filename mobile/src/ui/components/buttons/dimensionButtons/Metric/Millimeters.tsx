import React, {useContext} from 'react';

import {isMetric} from 'src/data';
import {ValueContext} from 'src/contexts';
import {Button} from 'src/ui';

export function Millimeters() {
  const {input, workingValue, setInputString, setWorkingValue} =
    useContext(ValueContext);

  const handleClick = () => {
    if (input != null) {
      if (isMetric(workingValue)) {
        workingValue.mm = input;
      } else {
        setWorkingValue({mm: input});
      }
      setInputString();
    }
  };

  return <Button onPress={() => handleClick()}> MM </Button>;
}
