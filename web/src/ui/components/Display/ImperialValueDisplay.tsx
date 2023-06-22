import React from 'react';
import { ImperialValue, stringify } from 'src/data';

export const ImperialValueDisplay = ({ value }: { value: ImperialValue }) => {
  return <div>Value: {stringify({ value })}</div>;
};
