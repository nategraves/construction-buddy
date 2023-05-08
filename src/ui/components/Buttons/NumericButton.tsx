import React, { useContext } from 'react';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';

interface Props {
  value: number | '.';
}

export const NumericButton = (props: Props) => {
  const { value } = props;
  const { inputString, setInputString } = useContext(ValueContext);

  const handleButtonPress = () => {
    if (String(value).match(/(:?\d|\.)/g) === null) {
      return;
    }

    setInputString(`${inputString ?? ''}${value}`);
  };

  return (
    <Button key={`button-${value}`} onClick={() => handleButtonPress()}>
      {String(value)}
    </Button>
  );
};
