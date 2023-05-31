import React, { FC, useContext } from 'react';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';
import { squareRoot } from 'src/data';

export const SquareRoot: FC = () => {
  const { input, setInputString, setTotalValue, setWorkingValue, totalValue, workingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    if (input != null) {
      setTotalValue(squareRoot({ value: input }));
      setInputString();
      return;
    }

    if (workingValue != null) {
      setTotalValue(squareRoot({ value: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(squareRoot({ value: totalValue }));
      return;
    }
  };

  return <Button onClick={() => handleClick()}>√x</Button>;
};
