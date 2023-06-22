import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

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

const partialRowStyles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
  },
});

export const TopButtons = () => {
  const { units } = useContext(ValueContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#212121', padding: 8 }}>
      <View style={partialRowStyles.buttonRow}>
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
      </View>
      <View style={partialRowStyles.buttonRow}>
        <Rise />
        <Run />
        <Diagonal />
        <Clear />
        <Percent />
      </View>
      <View style={partialRowStyles.buttonRow}>
        <Square />
        <SquareRoot />
        <MemoryAdd />
        <MemoryRecall />
        <MemoryClear />
      </View>
    </View>
  );
};
