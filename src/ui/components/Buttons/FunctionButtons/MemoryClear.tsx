import React, { useContext } from 'react';
import { ValueContext } from '~/contexts';

import { Button } from '~/ui';

export function MemoryClear() {
  const { setMemory } = useContext(ValueContext);

  return <Button onClick={() => setMemory([])}>MC</Button>;
}
