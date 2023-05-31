import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts/index';
import { Preview, ValueDisplay } from 'src/ui';
import { Value } from 'src/data';

export function Display() {
  const { inputString, workingValue, totalValue } = useContext(ValueContext);

  const showWorking = inputString == null && workingValue != null;
  const showTotal = inputString == null && workingValue == null && totalValue != null;

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
        alignItems: 'center',
        textAlign: 'right',
      }}
    >
      <div style={{ width: '100%', display: 'flex' }}>
        <Preview />
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        {inputString != null && (
          <div style={{ padding: '1rem', justifyContent: 'flex-end' }}>{inputString}</div>
        )}
        {showWorking && <ValueDisplay value={workingValue} />}
        {showTotal && (
          <div>
            <ValueDisplay value={totalValue as Value} />
          </div>
        )}
      </div>
    </div>
  );
}
