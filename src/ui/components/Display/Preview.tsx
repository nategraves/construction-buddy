import React, { useContext } from 'react';

import { ValueContext } from '~/contexts';
import { modeSymbolMap, stringify } from '~/data';

export const Preview = () => {
  const { toProcess, workingValue, mode } = useContext(ValueContext);

  const all = [...toProcess, workingValue]
    .map((value) => (value ? stringify({ value }) : ''))
    .join(` ${mode ? modeSymbolMap[mode] : ''} `);
  return <span>{all}</span>;
};
