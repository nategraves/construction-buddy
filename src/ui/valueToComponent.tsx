import React from 'react';
import { Value, isImperial, isMetric, isNumber } from '~/data';

export const valueToComponent = (value: Value) => {
  if (isNumber(value)) {
    return <span>{value}</span>;
  } else if (isImperial(value)) {
    return (
      <div className="flex flex-row">
        <div>{value.ft}ft</div>
        <div>{value.ins}in</div>
        {value.ft != null && value.fr?.toComponent()}
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
};
