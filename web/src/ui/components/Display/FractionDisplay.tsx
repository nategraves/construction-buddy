import React from 'react';

export const FractionDisplay = ({
  n,
  d,
  displayNPlaceholder = false,
  size = '0.8rem',
}: {
  n?: number;
  d: number;
  displayNPlaceholder?: boolean;
  size?: string;
}) => {
  const numerator = displayNPlaceholder ? n ?? 'X' : n;

  if (!numerator) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '40px',
        fontSize: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>{numerator}</div>
      <hr style={{ margin: 0, width: '100%', minWidth: '2rem' }} />
      <div>{d}</div>
    </div>
  );
};
