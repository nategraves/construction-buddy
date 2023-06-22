import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export const Delete = () => {
  const { inputString, setInputString } = useContext(ValueContext);

  const handleClick = () => {
    if (inputString != null) {
      setInputString(inputString.slice(0, -1));
    }
  };

  return <Button onClick={() => handleClick()}>&lt;</Button>;
};
