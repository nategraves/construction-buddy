import React from 'react';
import { Display, BottomButtons, TopButtons } from 'src/ui';

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
            padding: '8px 0',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'right',
          }}
        >
          Construction Buddy
        </h1>
      </div>
      <Display />
      <TopButtons />
      <BottomButtons />
    </div>
  );
}
