import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export const ToggleUnits = () => {
  const { units, toggleUnits } = useContext(ValueContext);

  return <Button onClick={() => toggleUnits()}>{units.toUpperCase()}</Button>;
};
