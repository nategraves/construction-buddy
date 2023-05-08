import { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Resolution } from 'src/data';

export function useResolution(): Resolution | undefined {
  const { resolution } = useContext(ValueContext);
  return resolution;
}
