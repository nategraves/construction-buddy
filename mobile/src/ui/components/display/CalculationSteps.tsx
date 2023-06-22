import React, { useContext } from 'react';
import { Box, Text } from 'native-base';

import { ValueContext } from 'src/contexts';
import { Symbols, isImperial, isMetric, isNumber } from 'src/data';
import { ValueDisplay } from './ValueDisplay';

export const CalculationSteps = () => {
  const { calculationSteps } = useContext(ValueContext);
  const valueSize = 24;

  const steps = calculationSteps.map((step, i) => {
    const lastOperation = calculationSteps[i - 1]?.operation;
    const {
      operation,
      valuePrescript,
      valuePostscript,
      totalPostscript,
      value,
    } = step;
    const isPercent = valuePostscript?.includes(Symbols.percent);
    return (
      <Box key={`previewStep${i}`} flexDir="row">
        {valuePrescript != null && <Text mr={2}>{valuePrescript}</Text>}
        {(isImperial(value) || isMetric(value)) && (
          <ValueDisplay value={value} valueSize={valueSize} labelSize={14} />
        )}
        {isNumber(value) && (
          <Text bold={true} fontSize={valueSize}>
            {isPercent ? value * 100 : value}
          </Text>
        )}
        {valuePostscript != null && <Text marginX={2}>{valuePostscript}</Text>}
        {operation != null && <Text marginX={2}>{operation}</Text>}
        {/* {totalPrescript != null && <div style={{ marginRight: '0.25rem' }}>{totalPrescript}</div>} */}
        {totalPostscript != null && lastOperation === Symbols.equals && (
          <Text>{totalPostscript}</Text>
        )}
      </Box>
    );
  });

  return (
    <Box
      width="100%"
      flexDir="row"
      alignItems="center"
      justifyContent="flex-end"
      flex={1}
      paddingX={2}
      borderBottomColor="#dedede"
      borderBottomWidth={2}
    >
      {steps}
    </Box>
  );
};
