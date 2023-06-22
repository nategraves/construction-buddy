import { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Units } from 'src/data';

export function useIsImperial(): boolean {
  const { units } = useContext(ValueContext);
  return units === Units.imperial;
}
