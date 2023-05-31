import React, { useContext, FC } from 'react';
import { square } from 'src/data';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Square: FC = () => {
  const { input, totalValue, workingValue, setInputString, setTotalValue, setWorkingValue } =
    useContext(ValueContext);

  const handleClick = () => {
    if (input == null && workingValue == null && totalValue == null) {
      return;
    }

    if (input != null) {
      setTotalValue(square({ value: input }));
      setInputString();
      return;
    }

    if (workingValue != null) {
      setTotalValue(square({ value: workingValue }));
      setWorkingValue();
      return;
    }

    if (totalValue != null) {
      setTotalValue(square({ value: totalValue }));
      return;
    }
  };

  return (
    <Button onClick={() => handleClick()}>
      <span>
        x<sup>2</sup>
      </span>
    </Button>
  );
};
