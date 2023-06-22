import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Add,
  Centimeters,
  Delete,
  Divide,
  Equals,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
  Multiply,
  NumericButton,
  Subtract,
} from '../components';
import { ValueContext } from 'src/contexts';
import { Units } from 'src/data';

const fullRowStyles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
  },
});

export const BottomButtons = () => {
  const { units } = useContext(ValueContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#212121', padding: 8 }}>
      <View style={fullRowStyles.buttonRow}>
        <Divide />
        <NumericButton value={7} />
        <NumericButton value={8} />
        <NumericButton value={9} />
        {units === Units.imperial ? <Fractional /> : <Millimeters />}
      </View>
      <View style={fullRowStyles.buttonRow}>
        <Multiply />
        <NumericButton value={4} />
        <NumericButton value={5} />
        <NumericButton value={6} />
        {units === Units.imperial ? <Inches /> : <Centimeters />}
      </View>
      <View style={fullRowStyles.buttonRow}>
        <Subtract />
        <NumericButton value={1} />
        <NumericButton value={2} />
        <NumericButton value={3} />
        {units === Units.imperial ? <Feet /> : <Meters />}
      </View>
      <View style={fullRowStyles.buttonRow}>
        <Add />
        <NumericButton value="." />
        <NumericButton value={0} />
        <Delete />
        <Equals />
      </View>
    </View>
  );
};
