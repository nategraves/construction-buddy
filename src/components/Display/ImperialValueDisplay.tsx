import React from "react";
import { stringify } from "../../data/Value/stringify";
import { ImperialValue } from "../../types";

export const ImperialValueDisplay = ({ value }: { value: ImperialValue }) => {
  return <div>Value: {stringify({ value })}</div>;
};
