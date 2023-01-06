import React, { useContext } from "react";

import { ValueContext } from "../../../../contexts";
import { Button } from "../../Button";

export const Rise = () => {
  const {} = useContext(ValueContext);

  const handleClick = () => {};

  return <Button onClick={() => handleClick()}>Rise</Button>;
};
