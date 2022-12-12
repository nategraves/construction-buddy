import React, { useContext, FC } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const Add: FC = () => {
  const { input, setStored, stored } = useContext(ValueContext);

  const onAdd = () => {
    if (input != null || stored != null) {
      setStored(input ?? 0 + stored ?? 0);
    }
  };

  return <Button onClick={() => onAdd()}>+</Button>;
};
