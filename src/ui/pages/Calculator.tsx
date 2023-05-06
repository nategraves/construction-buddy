import React from 'react';
import { BasicModeButtons, NumericButtons } from '~/ui/components';
import { Display } from '~/ui/sections/Display';

export function Calculator() {
  return (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxHeight: '100vh',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '400px',
      }}
    >
      <div style={{ width: '100%' }}>
        <h1
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            height: '16px',
            padding: '15px 0',
            textTransform: 'uppercase',
            textAlign: 'right',
          }}
        >
          Construction Buddy
        </h1>
      </div>
      <Display />
      <BasicModeButtons />
      <NumericButtons />
    </div>
  );
}
