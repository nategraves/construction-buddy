import React from 'react';
import { ImperialValue, isImperial, isMetric, isNumber, MetricValue } from 'src/data';

export function ValueDisplay(props: {
  value: ImperialValue | MetricValue;
  valueSize?: string;
  labelSize?: string;
  prescript?: string;
  postscript?: string;
}) {
  const { labelSize = '1.1rem', value, valueSize = '2rem', prescript, postscript } = props;

  if (value == null) {
    return null;
  }

  if (isNumber(value)) {
    return <div style={{ fontSize: valueSize, fontWeight: 'bold' }}>{value}</div>;
  } else if (typeof value === 'string') {
    // const decimalIndex = value.indexOf('.');
    // const stringValue = decimalIndex > -1 ? value.substring(0, decimalIndex + 3) : value;
    return <div style={{ fontSize: valueSize, fontWeight: 'bold' }}>{value}</div>;
  } else if (isImperial(value)) {
    const { ft, ins, fr } = value;
    return (
      <div className="flex flex-row" style={{ alignContent: 'center', fontSize: valueSize }}>
        {prescript != null && <div style={{ fontSize: labelSize }}>{prescript}</div>}
        {ft != null && (
          <div
            className="flex row"
            style={{
              fontWeight: 'bold',
              marginRight: '0.25rem',
            }}
          >
            <div>{ft}</div>
            <div style={{ marginLeft: '0 0.5rem', fontSize: labelSize }}>ft</div>
          </div>
        )}
        {ins != null && (
          <div
            className="flex row"
            style={{
              fontWeight: 'bold',
              marginRight: '0.25rem',
            }}
          >
            <div>{ins}</div>
            <div style={{ marginLeft: '0 0.25rem', fontSize: labelSize }}>ins</div>
          </div>
        )}
        {fr != null && (
          <div
            className="flex row"
            style={{
              fontWeight: 'bold',
            }}
          >
            {fr.toComponent()}
          </div>
        )}
        {postscript != null && <div style={{ fontSize: labelSize }}>{postscript}</div>}
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
