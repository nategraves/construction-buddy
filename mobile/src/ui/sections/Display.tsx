import React, { useContext } from 'react';
import { Box } from 'native-base';

import { ValueContext } from 'src/contexts/index';
import { CalculationSteps, MainDisplay } from 'src/ui';
import { Symbols, isNumber } from 'src/data';

export function Display() {
  const { input, inputString, workingValue, calculationSteps } =
    useContext(ValueContext);

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;
  const lastOperator = lastStep?.operation;
  const showTotal = lastTotal != null && lastOperator === Symbols.equals;

  const value = showTotal ? lastTotal : inputString ?? workingValue;
  // const prescript = showTotal ? lastStep?.totalPrescript : lastStep?.valuePrescript;
  const postscript = showTotal
    ? lastStep?.totalPostscript
    : lastStep?.valuePostscript;

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      minHeight="150"
    >
      <CalculationSteps />
      <MainDisplay
        valueSize={inputString && inputString.length > 10 ? 28 : 38}
        value={
          postscript?.includes(Symbols.percent) && isNumber(value)
            ? (value as number) * 100
            : value
        }
        // prescript={prescript}
        // postscript={postscript}
      />
    </Box>
  );
}
