import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';
import { Mode } from 'src/data';
import { isSame, modeMap } from 'src/data';

export const Equals = () => {
  const {
    input,
    mode,
    setInputString,
    updateMode,
    setWorkingValue,
    setTotalValue,
    workingValue,
    toProcess: initialToProcess,
    setToProcess,
  } = useContext(ValueContext);
  const handleClick = () => {
    if (mode == null) {
      return;
    }

    let toProcess = initialToProcess;

    if (workingValue) {
      if (toProcess.length && isSame(workingValue, toProcess[0])) {
        toProcess = [...toProcess, workingValue];
      } else {
        toProcess = [workingValue];
      }
      setWorkingValue();
    }

    if (!toProcess.length) {
      throw new Error(`Unable to apply '${mode}' because toProcess is empty`);
    }

    const initial = toProcess.shift();

    if (toProcess.length === 0 && input == null && workingValue == null) {
      console.warn('Only 1 value in toProcess. Setting as total');
      setTotalValue(initial);
    } else if (toProcess.length === 0 && input != null) {
      const total = modeMap[mode]({ value: initial!, toApply: input });
      setInputString();
      setTotalValue(total!);
    } else if (toProcess.length === 0 && workingValue != null) {
      const total = modeMap[mode]({ value: initial!, toApply: workingValue });
      setWorkingValue();
      setTotalValue(total!);
    } else {
      console.warn({ initial, toProcess, mode, input });
      const total = toProcess.reduce((sum, value) => {
        const newSum = modeMap[mode]({ value: sum!, toApply: value });
        return newSum;
      }, initial);
      setTotalValue(total);
    }

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
