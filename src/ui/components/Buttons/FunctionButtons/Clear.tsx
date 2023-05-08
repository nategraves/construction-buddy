import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Clear = () => {
  const {
    inputString,
    toProcess,
    totalValue,
    workingValue,
    setInputString,
    setTotalValue,
    setToProcess,
    setWorkingValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    updateMode();

    if (inputString != null) {
      setInputString();
      return;
    }
    if (workingValue) {
      setWorkingValue();
      return;
    }
    if (toProcess.length) {
      setToProcess([]);
      return;
    }
    if (totalValue) {
      setTotalValue();
    }
  };

  return <Button onClick={() => handleClick()}>Clear</Button>;
};
