import React from 'react';
import {Text} from 'react-native';

import {ImperialValue, stringify} from 'src/data';

export const ImperialValueDisplay = ({value}: {value: ImperialValue}) => {
  return <Text>Value: {stringify({value})}</Text>;
};
