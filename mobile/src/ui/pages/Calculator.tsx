import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Heading } from 'native-base';

import { Display, BottomButtons, TopButtons } from '../sections';

export function Calculator() {
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  return (
    <Box flexDir="column" flex={1} overflow="hidden">
      {/* <Heading fontSize={18} p={2} textTransform="uppercase">
        CalcuBuild 
      </Heading> */}
      <Display />
      <Box flex={1}>
        <TopButtons />
        <BottomButtons />
      </Box>
    </Box>
  );
}
