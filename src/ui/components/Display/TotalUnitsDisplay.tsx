import React, { ReactNode, useContext } from 'react';
import { Mode } from 'src/data';

import { ValueContext } from 'src/contexts';
import { isImperial, isMetric } from 'src/data';

export const TotalUnitsDisplay = () => {
  const { totalValue, mode } = useContext(ValueContext);

  let totalUnits: ReactNode = null;

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
