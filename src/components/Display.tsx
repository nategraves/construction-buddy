import React from "react";

enum CalculatorMode {
  pitch = "pitch",
}

type MetricValue = {
  km: number;
  m: number;
  cm: number;
  mm: number;
};

type ImperialValue = {
  ft: number;
  in: number;
  th: number;
};

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
      12 ft - 4 in - 3/32"
    </div>
  );
}
