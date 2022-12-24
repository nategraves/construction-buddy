import React, { useContext } from "react";
import { fraction } from "mathjs";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";
import { Mode } from "../../../types";
import { add, isImperial, isMetric, isSame, Value } from "../../../data/Value";

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
    console.log("Equals");

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

    switch (mode) {
      case Mode.add:
        let initialValue: Value = 0;

        if (isImperial(firstToProcess)) {
          initialValue = { ft: 0, ins: 0, fr: fraction(0, 1) };
        }

        if (isMetric(firstToProcess)) {
          initialValue = { m: 0, cm: 0, mm: 0 };
        }

        const total = toProcess.reduce((sum, value) => {
          const newSum = add({ value: sum, toAdd: value });
          console.log({ newSum });
          return newSum;
        }, initialValue);
        console.log(total);
        setTotalValue(total);

        break;
      default:
    }

    updateMode(Mode.equals);
    setToProcess([]);
  };

  return <Button onClick={() => handleClick()}>=</Button>;
};
