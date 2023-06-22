import React from 'react';
import {Text} from 'react-native';

import {MetricValue, stringify} from 'src/data';

export const MetricValueDisplay = ({value}: {value: MetricValue}) => {
  return <Text>Value: {stringify({value})}</Text>;
};
