import React, { ReactNode, useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { isImperial, isMetric } from 'src/data';

// TODO: Fix this to account for postscript
export const TotalUnitsDisplay = () => {
  const { totalValue } = useContext(ValueContext);

  let totalUnits: ReactNode = null;

  if (isImperial(totalValue)) {
    totalUnits = (
      <span>
        &nbsp;FT<sup>2</sup>
      </span>
    );
  }

  if (isMetric(totalValue)) {
    totalUnits = (
      <span>
        &nbsp;M<sup>2</sup>
      </span>
    );
  }

  return totalUnits;
};
