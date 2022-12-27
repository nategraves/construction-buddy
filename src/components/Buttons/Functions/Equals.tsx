import React, { useContext } from "react";
import { fraction } from "mathjs";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";
import { Mode } from "../../../types";
import {
  add,
  isImperial,
  isMetric,
  isSame,
  subtract,
  Value,
} from "../../../data/Value";
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

    console.log("Equals Activated");

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

    let initial: Value = 0;

    if (isImperial(firstToProcess)) {
      initial = { ft: 0, ins: 0, fr: fraction(0, 1) };
    }

    if (isMetric(firstToProcess)) {
      initial = { m: 0, cm: 0, mm: 0 };
    }

    console.log(`Computing total`);

    let total;

    if (mode === Mode.add) {
      total = toProcess.reduce(
        (sum, value) => add({ value: sum, toApply: value }),
        initial
      );
    } else if (mode === Mode.subtract) {
      const baseValue = toProcess.shift();
      total = toProcess.reduce((sum, value) => {
        return subtract({ value: sum, toApply: value });
      }, baseValue);
    }

    console.log(total);
    setTotalValue(total);

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
