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
    setInput,
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

    if (workingValue || input != null) {
      if (toProcess.length) {
        if (isSame(workingValue, toProcess[0]) || isSame(input, toProcess[0])) {
          toProcess = [...toProcess, workingValue];
        }
      } else {
        toProcess = [workingValue ?? input];
      }
      setWorkingValue();
      setInput();
    }

    if (!toProcess.length) {
      return;
    }

    const firstToProcess = toProcess[0];

    if (toProcess.length === 1) {
      setTotalValue(firstToProcess);
    }

    const initial = toProcess.shift();
    const total = toProcess.reduce((sum, value) => {
      const method = modeMap[mode];
      return method({ value: sum, toApply: value });
    }, initial);

    setTotalValue(total);

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
