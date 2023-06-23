import React, { ReactNode, useContext } from 'react';
import { Box } from 'native-base';

import {
  Clear,
  Diagonal,
  MemoryAdd,
  MemoryClear,
  MemoryRecall,
  Percent,
  Rise,
  Run,
  SelectResolution,
  SelectUnits,
  Square,
  SquareRoot,
} from '../components';
import { ValueContext } from 'src/contexts';
import { Units } from 'src/data';

// const partialRowStyles = StyleSheet.create({
//   buttonRow: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     margin: 4,
//   },
// });

const ButtonRow = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      m={4}
    >
      {children}
    </Box>
  );
};

export const TopButtons = () => {
  const { units } = useContext(ValueContext);
  return (
    <Box backgroundColor="#212121" padding={4} flexDir="column">
      <ButtonRow>
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
      </ButtonRow>
      <ButtonRow>
        <Rise />
        <Run />
        <Diagonal />
        <Clear />
        <Percent />
      </ButtonRow>
      <ButtonRow>
        <Square />
        <SquareRoot />
        <MemoryAdd />
        <MemoryRecall />
        <MemoryClear />
      </ButtonRow>
    </Box>
  );
};
