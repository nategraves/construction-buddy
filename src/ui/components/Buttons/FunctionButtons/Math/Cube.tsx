import React, { useContext, FC } from 'react';
import {
  multiply,
  // isImperial,
  // isMetric,
  // isNumber
} from 'src/data';
// import { Mode } from "~~src/data";

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Cube: FC = () => {
  const {
    input,
    setInputString,
    // setToProcess,
    setTotalValue,
    setWorkingValue,
    // updateMode,
    // toProcess,
    totalValue,
    workingValue,
  } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    // updateMode(Mode.cube);

    if (input != null) {
      setTotalValue(multiply({ value: input, toApply: input }));
      setInputString();
      return;
    }

    if (workingValue != null) {
      setTotalValue(multiply({ value: workingValue, toApply: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(multiply({ value: totalValue, toApply: totalValue }));
      return;
    }
  };

  return <Button onClick={() => handleClick()}>*</Button>;
};
