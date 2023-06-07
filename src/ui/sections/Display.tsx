import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts/index';
import { Preview, ValueDisplay } from 'src/ui';
import { Symbols, isImperial, isMetric } from 'src/data';

export function Display() {
  const { input, inputString, workingValue, calculationSteps } = useContext(ValueContext);

  console.log({ input, inputString });

  const lastStep = calculationSteps[calculationSteps.length - 1];
  const lastTotal = lastStep?.total;
  const lastOperator = lastStep?.operation;
  const showTotal = lastOperator === Symbols.equals;

  const value = showTotal ? lastTotal : inputString ?? workingValue;
  const prescript = lastOperator === Symbols.equals ? lastStep.prescript : '';
  const postscript = lastOperator === Symbols.equals ? lastStep.postscript : '';

  const valueSize = '2rem';

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
        {(isMetric(value) || isImperial(value)) && (
          <ValueDisplay
            value={value}
            prescript={prescript}
            postscript={postscript}
            valueSize={valueSize}
          />
        )}
        {typeof value === 'string' && <div style={{ fontSize: valueSize }}>{value}</div>}
      </div>
    </div>
  );
}
