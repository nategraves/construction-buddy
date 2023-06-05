import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts/index';
import { Preview, ValueDisplay } from 'src/ui';
import { Symbols } from 'src/data';

export function Display() {
  const { input, inputString, workingValue, totalValue, calculationSteps } =
    useContext(ValueContext);

  console.log({ input, inputString });

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;
  const lastOperator = lastStep?.operator;

  const value =
    lastOperator === Symbols.equals ? lastTotal : inputString ?? workingValue ?? totalValue;
  const prescript = lastOperator === Symbols.equals ? lastStep.prescript : '';
  const postscript = lastOperator === Symbols.equals ? lastStep.postscript : '';

  return (
    <div
      style={{
        alignContent: 'flex-start',
        backgroundColor: '#e8eced',
        display: 'flex',
        flexWrap: 'wrap',
        height: '150px',
        width: '100%',
        padding: '0.5rem',
        justifyContent: 'flex-end',
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Preview />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
        <ValueDisplay value={value} prescript={prescript} postscript={postscript} />
      </div>
    </div>
  );
}
