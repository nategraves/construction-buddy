import React, { useContext } from 'react';
import { ValueContext } from 'src/contexts';

import { Button } from 'src/ui';

export function MemoryAdd() {
  const { input, workingValue, addMemory, setInputString, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null) {
      return;
    }

    if (input != null) {
      addMemory(input);
      setInputString();
      return;
    }

    if (workingValue != null) {
      addMemory(workingValue);
      setWorkingValue();
      return;
    }
  };

  return <Button onClick={() => handleClick()}>M+</Button>;
}
