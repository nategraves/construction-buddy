import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { stringify } from 'src/data';

export const Preview = () => {
  const { workingValue } = useContext(ValueContext);

  // TODO: Fix this to account for calculationSteps
  const all = [workingValue].map((value) => (value ? stringify({ value }) : ''));
  // .join(` ${mode != null ? modeSymbolMap[mode] : ''} `);
  return <span>{all}</span>;
};
