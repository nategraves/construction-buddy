import React, { useContext } from 'react';

import { ValueContext } from 'src/contexts';
import { Symbols } from 'src/data';
import { ValueDisplay } from 'src/ui/components/Display/ValueDisplay';

export function CalculationStepDisplay() {
  const { calculationSteps } = useContext(ValueContext);

  const steps = calculationSteps.map((step) => (
    <div className="flex row">
      {step.prescript != null && <div style={{ marginRight: '0.25rem' }}>{step.prescript}</div>}
      <ValueDisplay value={step.value} valueSize="1.3rem" labelSize="0.9rem" />
      {step.operator != null && <div style={{ marginRight: '0.25rem' }}>{step.operator}</div>}
      {step.total != null && step.operator === Symbols.equals && (
        <ValueDisplay value={step.total} valueSize="1.3rem" labelSize="0.9rem" />
      )}
      {step.postscript != null && <div>{step.postscript}</div>}
    </div>
  ));

  return <div className="flex row">{steps}</div>;
}
