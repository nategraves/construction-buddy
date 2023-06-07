import React, { useContext } from 'react';

import { ValueDisplay } from 'src/ui/components/Display/ValueDisplay';
import { ValueContext } from 'src/contexts';
import { Symbols, isImperial, isMetric, isNumber } from 'src/data';

export const Preview = () => {
  const { calculationSteps } = useContext(ValueContext);
  const valueSize = '1.3rem';

  const steps = calculationSteps.map((step) => {
    const { operation, prescript, postscript, value } = step;
    return (
      <div className="flex row">
        {prescript != null && <div style={{ marginRight: '0.25rem' }}>{prescript}</div>}
        {(isImperial(value) || isMetric(value)) && (
          <ValueDisplay value={value} valueSize={valueSize} labelSize="0.9rem" />
        )}
        {isNumber(value) && <div style={{ fontWeight: 'bold', fontSize: valueSize }}>{value}</div>}
        {operation != null && <div style={{ margin: '0 0.25rem' }}>{operation}</div>}
        {postscript != null && operation !== Symbols.equals && <div>{postscript}</div>}
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
