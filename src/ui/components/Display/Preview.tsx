import React, { useContext } from 'react';

import { ValueDisplay } from 'src/ui/components/Display/ValueDisplay';
import { ValueContext } from 'src/contexts';
import { Symbols } from 'src/data';

export const Preview = () => {
  const { calculationSteps } = useContext(ValueContext);

  const steps = calculationSteps.map((step) => {
    return (
      <div className="flex row">
        {step.prescript != null && <div style={{ marginRight: '0.25rem' }}>{step.prescript}</div>}
        {step.value != null && (
          <ValueDisplay value={step.value} valueSize="1.3rem" labelSize="0.9rem" />
        )}
        {step.operator != null && <div style={{ margin: '0 0.25rem' }}>{step.operator}</div>}
        {step.postscript != null && step.operator !== Symbols.equals && (
          <div>{step.postscript}</div>
        )}
      </div>
    );
  });

  return (
    <div
      className="flex row"
      style={{ padding: '1rem', justifyContent: 'flex-end', minHeight: '1.3rem' }}
    >
      {steps}
    </div>
  );
};
