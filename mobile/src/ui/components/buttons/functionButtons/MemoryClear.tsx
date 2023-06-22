import React, { useContext } from 'react';
import { Text } from 'react-native';

import { ValueContext } from 'src/contexts';
import { Button } from 'src/ui';

export function MemoryClear() {
  const { setMemory } = useContext(ValueContext);

  return <Button onPress={() => setMemory([])}>MC</Button>;
}
