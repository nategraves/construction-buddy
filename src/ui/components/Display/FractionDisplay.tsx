import React from 'react';

export const FractionDisplay = ({ n, d }: { n?: number; d: number }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{n ?? 'X'}</span>
      <hr style={{ margin: 0 }} />
      <span>{d}</span>
    </div>
  );
};
