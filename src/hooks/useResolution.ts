import { useContext } from 'react';
import { Resolution } from '~/types/';

import { ValueContext } from '~/contexts';

export function useResolution(): Maybe<Resolution> {
  const { resolution } = useContext(ValueContext);
  return resolution;
}
