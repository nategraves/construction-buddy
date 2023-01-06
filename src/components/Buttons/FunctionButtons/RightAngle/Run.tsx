import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { Button } from "../../Button";

export const Run = () => {
  const {} = useContext(ValueContext);

  const handleClick = () => {};

  return <Button onClick={() => handleClick()}>Run</Button>;
};
