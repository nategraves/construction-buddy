import React, { useContext } from 'react';
import { stringify } from 'src/data/stringify';

import { ValueContext } from 'src/contexts/index';
import { Preview, TotalUnitsDisplay } from 'src/ui';

export function Display() {
  const { inputString, workingValue, totalValue } = useContext(ValueContext);

  const showStored = inputString == null && workingValue != null;
  const showTotal = inputString == null && workingValue == null && totalValue != null;

  return (
    <div
      style={{
        alignContent: 'center',
        backgroundColor: '#e8eced',
        display: 'flex',
        flexWrap: 'wrap',
        height: '150px',
        width: '100%',
      }}
    >
      <div style={{ width: '100%', display: 'flex' }}>
        <Preview />
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        {inputString != null && <div>{inputString}</div>}
        {showStored && <div>{stringify({ value: workingValue })}</div>}
        {showTotal && (
          <div>
            <span>{stringify({ value: totalValue })}</span>
            <TotalUnitsDisplay />
          </div>
        )}
      </div>
    </div>
  );
}
