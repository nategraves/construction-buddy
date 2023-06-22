import React, { useContext } from 'react';

import { ValueDisplay } from 'src/ui/components/Display/ValueDisplay';
import { ValueContext } from 'src/contexts';
import { Symbols, isImperial, isMetric, isNumber } from 'src/data';

export const CalculationSteps = () => {
  const { calculationSteps } = useContext(ValueContext);
  const valueSize = '1.3rem';

  const steps = calculationSteps.map((step, i) => {
    const lastOperation = calculationSteps[i - 1]?.operation;
    const { operation, valuePrescript, valuePostscript, totalPostscript, value } = step;
    const isPercent = valuePostscript?.includes(Symbols.percent);
    return (
      <div className="flex row" key={`previewStep${i}`}>
        {valuePrescript != null && <div style={{ marginRight: '0.25rem' }}>{valuePrescript}</div>}
        {(isImperial(value) || isMetric(value)) && (
          <ValueDisplay value={value} valueSize={valueSize} labelSize="0.9rem" />
        )}
        {isNumber(value) && (
          <div style={{ fontWeight: 'bold', fontSize: valueSize }}>
            {isPercent ? value * 100 : value}
          </div>
        )}
        {valuePostscript != null && <div style={{ margin: '0 0.25rem' }}>{valuePostscript}</div>}
        {operation != null && <div style={{ margin: '0 0.25rem' }}>{operation}</div>}
        {/* {totalPrescript != null && <div style={{ marginRight: '0.25rem' }}>{totalPrescript}</div>} */}
        {totalPostscript != null && lastOperation === Symbols.equals && (
          <div>{totalPostscript}</div>
        )}
      </div>
    );
  });

  return (
    <div
      id="calculation-steps"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        minHeight: '1.3rem',
        flex: '0 0 auto',
      }}
    >
      {steps}
    </div>
  );
};
