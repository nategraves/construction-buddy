import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";
import { Mode } from "../../../types";
import { isSame } from "../../../data/Value";
import { modeMap } from "../../../data/Value/modeMap";

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

    if (toProcess.length === 0 && input == null) {
      console.warn("Only 1 value in toProcess. Setting as total");
      setTotalValue(initial);
    } else if (toProcess.length === 0 && input != null) {
      const total = modeMap[mode]({ value: initial, toApply: input });
      setInputString();
      setTotalValue(total);
    } else {
      console.warn({ initial, toProcess, mode, input });
      const total = toProcess.reduce((sum, value) => {
        const newSum = modeMap[mode]({ value: sum, toApply: value });
        return newSum;
      }, initial);
      setTotalValue(total);
    }

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
