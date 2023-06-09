import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts/index';
import { CalculationSteps, MainDisplay } from 'src/ui';
import { Symbols, isNumber } from 'src/data';

export function Display() {
  const { input, inputString, workingValue, calculationSteps } = useContext(ValueContext);

  console.log({ input, inputString });

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;
  const lastOperator = lastStep?.operation;
  const showTotal = lastTotal != null && lastOperator === Symbols.equals;

  const value = showTotal ? lastTotal : inputString ?? workingValue;
  const prescript = showTotal ? lastStep?.totalPrescript : lastStep?.valuePrescript;
  const postscript = showTotal ? lastStep?.totalPostscript : lastStep?.valuePostscript;

  return (
    <div
      style={{
        alignContent: 'flex-start',
        backgroundColor: '#e8eced',
        display: 'flex',
        flexWrap: 'wrap',
        height: '120px',
        width: '100%',
        padding: '0.5rem',
        justifyContent: 'flex-end',
      }}
    >
      <CalculationSteps />
      {value != null && (
        <MainDisplay
          value={postscript?.includes(Symbols.percent) && isNumber(value) ? value * 100 : value}
          // prescript={prescript}
          // postscript={postscript}
        />
      )}
    </div>
  );
}
