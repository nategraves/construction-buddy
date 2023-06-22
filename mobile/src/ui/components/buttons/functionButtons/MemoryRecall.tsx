import React, { useContext } from 'react';
import { Text } from 'react-native';

import { ValueContext } from 'src/contexts';
import { isImperial, isMetric, isNumber } from 'src/data';
import { Button } from 'src/ui';

export function MemoryRecall() {
  const { recallMemory, setInputString, setWorkingValue } =
    useContext(ValueContext);
  const handleClick = () => {
    const value = recallMemory();
    if (isNumber(value)) {
      setInputString(String(value));
    }

    if (isImperial(value) || isMetric(value)) {
      setWorkingValue(value);
    }
  };

  return <Button onPress={() => handleClick()}>MR</Button>;
}
