import React from 'react';
import { isImperial, isMetric, isNumber, Value } from 'src/data';

export function ValueDisplay(props: {
  labelSize?: string;
  prescript?: string;
  postscript?: string;
  value: Value | string;
  valueSize?: string;
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
      <div
        className="flex flex-row"
        style={{ alignContent: 'center', fontSize: valueSize, fontWeight: 'bold' }}
      >
        {prescript != null && <div style={{ fontSize: labelSize }}>{prescript}</div>}
        {ft != null && ft !== 0 && (
          <div className="flex row">
            <div style={{ marginRight: '0.25rem' }}>{ft}</div>
            <div style={{ fontSize: labelSize }}>ft</div>
          </div>
        )}
        {ins != null && ins !== 0 && (
          <div
            className="flex row"
            style={{
              marginLeft: '0.25rem',
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
              marginLeft: '0.25rem',
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
