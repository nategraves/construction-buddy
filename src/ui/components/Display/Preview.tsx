import React from 'react';

import { CalculationStepDisplay } from './CalculationStepDisplay';

export const Preview = () => {
  return (
    <div
      className="flex row"
      style={{ padding: '1rem', justifyContent: 'flex-end', minHeight: '1.3rem' }}
    >
      <CalculationStepDisplay />
    </div>
  );
};
