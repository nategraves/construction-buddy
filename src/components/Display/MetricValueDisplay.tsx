import React from "react";

import { stringify } from "../../data";
import { MetricValue } from "../../types";

export const MetricValueDisplay = ({ value }: { value: MetricValue }) => {
  return <div>Value: {stringify({ value })}</div>;
};
