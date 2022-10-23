import React from "react";

import type { CalculatorMode, ImperialValue, MetricValue } from "../types";

type BaseDisplayProps = {
  calculatorMode?: CalculatorMode;
};

type MetricDisplayProps = BaseDisplayProps & {
  units: "metric";
  currentValue: MetricValue;
};

type ImperialDisplayProps = BaseDisplayProps & {
  units: "standard";
  currentValue: ImperialValue;
};

type DisplayProps = MetricDisplayProps | ImperialDisplayProps;

export function Display(props: DisplayProps) {
  const { currentValue, units } = props;
  return (
    <div
      style={{
        alignItems: "center",
        background: "#eee",
        backgroundColor: "#d4d4d4",
        display: "flex",
        justifyContent: "center",
        height: "150px",
        width: "100%",
      }}
    >
      {units === "standard"
        ? `${currentValue.ft}ft - ${currentValue.in}in - ${currentValue.th}/64"`
        : `${currentValue.m}m - ${currentValue.cm}cm - ${currentValue.mm}mm`}
    </div>
  );
}
