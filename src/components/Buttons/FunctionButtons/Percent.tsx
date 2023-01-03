import React, { useContext } from "react";

import { Button } from "../Button";
import { ValueContext } from "../../../contexts";
import { isNumber, isSame, modeMap } from "../../../data";
import { Mode } from "../../../types";

export function Percent() {
  const {
    input,
    mode,
    toProcess: initialToProcess,
    workingValue,
    setInputString,
    setToProcess,
    setWorkingValue,
    setTotalValue,
    updateMode,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (
      input == null ||
      (workingValue == null && initialToProcess.length === 0)
    ) {
      console.warn("No input or no working value & no toProcess values");
      return;
    }

    const pct = input / 100;
    setInputString();

    let toProcess = [...initialToProcess];

    const initial = toProcess.shift();
    console.log({ initial });

    if (workingValue) {
      if (isSame(workingValue, initial)) {
        toProcess = [...toProcess, workingValue];
      } else {
        toProcess = [workingValue];
      }
      setWorkingValue();
    }

    if (initial && toProcess.length === 0) {
      const newTotal = modeMap[mode]({ value: initial, toApply: pct });
      setTotalValue(newTotal);
    } else {
      console.warn({ initial, toProcess, mode, input });
      const sum = toProcess.reduce((sum, value) => {
        const newSum = modeMap[mode]({ value: sum, toApply: value });
        return newSum;
      }, initial);
      const newTotal = modeMap[mode]({ value: sum, toApply: pct });
      setTotalValue(newTotal);
    }

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>%</Button>;
}
