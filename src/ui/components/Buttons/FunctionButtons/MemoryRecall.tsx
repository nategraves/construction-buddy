import { ValueContext } from '~/contexts';
import { isImperial, isMetric, isNumber } from '~/data';
import React, { useContext } from 'react';

import { Button } from '~/ui';

export function MemoryRecall() {
  const { recallMemory, setInputString, setWorkingValue } = useContext(ValueContext);
  const handleClick = () => {
    const value = recallMemory();
    if (isNumber(value)) {
      setInputString(String(value));
    }

    if (isImperial(value) || isMetric(value)) {
      setWorkingValue(value);
    }
  };

  return <Button onClick={() => handleClick()}>MR</Button>;
}
