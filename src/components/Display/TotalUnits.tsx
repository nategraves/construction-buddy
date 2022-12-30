import React, { ReactElement, useContext } from "react";
import { Mode } from "../../types";

import { ValueContext } from "../../contexts";
import { isImperial, isMetric } from "../../data";

export const TotalUnits = () => {
  const { totalValue, mode } = useContext(ValueContext);

  let totalUnits: ReactElement = null;

  const isSquare = mode === Mode.square;

  if (isSquare && isImperial(totalValue)) {
    totalUnits = (
      <span>
        &nbsp;FT<sup>2</sup>
      </span>
    );
  }

  if (isSquare && isMetric(totalValue)) {
    totalUnits = (
      <span>
        &nbsp;M<sup>2</sup>
      </span>
    );
  }

  return totalUnits;
};
