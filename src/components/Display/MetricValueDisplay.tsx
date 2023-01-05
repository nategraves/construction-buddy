import React from "react";

import { MetricValue, stringify } from "../../data";

export const MetricValueDisplay = ({ value }: { value: MetricValue }) => {
  return <div>Value: {stringify({ value })}</div>;
};
