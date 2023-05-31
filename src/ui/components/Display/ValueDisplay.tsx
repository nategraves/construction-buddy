import React from 'react';
import { Value, isImperial, isMetric, isNumber } from 'src/data';

export function ValueDisplay(props: { value: Value; valueSize?: string; labelSize?: string }) {
  const { labelSize = '1.1rem', value, valueSize = '2rem' } = props;
  if (isNumber(value)) {
    return <span>{value}</span>;
  } else if (isImperial(value)) {
    const { ft, ins, fr } = value;
    return (
      <div className="flex flex-row" style={{ marginRight: '0.25rem' }}>
        {ft != null && (
          <div className="flex row" style={{ alignContent: 'center' }}>
            <div style={{ fontSize: valueSize, fontWeight: 'bold', marginRight: '0.25rem' }}>
              {ft}
            </div>
            <div style={{ fontSize: labelSize }}>ft</div>
          </div>
        )}
        {ins != null && <div>{ins}in</div>}
        {fr != null && fr.toComponent()}
      </div>
    );
  } else if (isMetric(value)) {
    return (
      <div className="flex flex-row">
        <div>{value.m}m</div>
        <div>{value.cm}cm</div>
        <div>{value.mm}mm</div>
      </div>
    );
  }

  throw new Error(`valueToComponent: value is not a Value: ${value}`);
}
