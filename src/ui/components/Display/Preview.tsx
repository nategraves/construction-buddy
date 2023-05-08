import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { modeSymbolMap, stringify } from 'src/data';

export const Preview = () => {
  const { toProcess, workingValue, mode } = useContext(ValueContext);

  const all = [...toProcess, workingValue]
    .map((value) => (value ? stringify({ value }) : ''))
    .join(` ${mode != null ? modeSymbolMap[mode] : ''} `);
  return <span>{all}</span>;
};
