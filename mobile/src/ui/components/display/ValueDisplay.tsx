import React from 'react';
import { Box, Text } from 'native-base';

import { isImperial, isMetric, isNumber, Value } from 'src/data';

export function ValueDisplay(props: {
  labelSize?: number;
  prescript?: string;
  postscript?: string;
  value: Value | string;
  valueSize?: number;
}) {
  const {
    labelSize = 18,
    value,
    valueSize = 24,
    prescript,
    postscript,
  } = props;

  if (value == null) {
    return null;
  }

  if (isNumber(value)) {
    return (
      <Text style={{ fontSize: valueSize, fontWeight: 'bold' }}>{value}</Text>
    );
  } else if (typeof value === 'string') {
    // const decimalIndex = value.indexOf('.');
    // const stringValue = decimalIndex > -1 ? value.substring(0, decimalIndex + 3) : value;
    return (
      <Text fontSize={valueSize} bold>
        {value}
      </Text>
    );
  } else if (isImperial(value)) {
    const { ft, ins, fr } = value;
    return (
      <Box alignItems="center" flexDirection="row">
        {prescript != null && <Text fontSize={labelSize}>{prescript}</Text>}
        {ft != null && ft !== 0 && (
          <Box
            flexDir="row"
            alignItems="center"
            marginRight={ins != null || fr != null ? 2 : 0}
          >
            <Text marginRight={2} fontSize={valueSize} bold>
              {ft}
            </Text>
            <Text fontSize={labelSize}>ft</Text>
          </Box>
        )}
        {ins != null && ins !== 0 && (
          <Box
            flexDir="row"
            alignItems="center"
            marginRight={fr != null ? 2 : 0}
          >
            <Text marginRight={2} fontSize={valueSize} bold>
              {ins}
            </Text>
            <Text fontSize={labelSize}>ins</Text>
          </Box>
        )}
        {fr != null && (
          <Box flexDir="row" alignItems="center" marginLeft={0}>
            {fr.toComponent(labelSize)}
          </Box>
        )}
        {postscript != null && <Text fontSize={labelSize}>{postscript}</Text>}
      </Box>
    );
  } else if (isMetric(value)) {
    return (
      <Box flexDirection="row">
        <Text>{value.m}m</Text>
        <Text>{value.cm}cm</Text>
        <Text>{value.mm}mm</Text>
      </Box>
    );
  }

  throw new Error(`valueToComponent: value is not a Value: ${value}`);
}
