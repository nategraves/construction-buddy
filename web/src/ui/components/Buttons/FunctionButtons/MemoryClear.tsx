import React, { useContext } from 'react';
import { ValueContext } from 'src/contexts';

import { Button } from 'src/ui';

export function MemoryClear() {
  const { setMemory } = useContext(ValueContext);

  return <Button onClick={() => setMemory([])}>MC</Button>;
}
