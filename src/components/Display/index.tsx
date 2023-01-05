import React, { useContext } from "react";
import { stringify } from "../../data/Value";

import { ValueContext } from "../../contexts";
import { Preview } from "./Preview";
import { TotalUnits } from "./TotalUnits";

export function Display() {
  const { inputString, mode, workingValue, totalValue } =
    useContext(ValueContext);

  const showStored = inputString == null && workingValue != null;
  const showTotal =
    inputString == null && workingValue == null && totalValue != null;

  return (
    <div
      style={{
        alignContent: "center",
        backgroundColor: "#e8eced",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "150px",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "5px", left: "5px" }}>
        Mode: {mode}
      </div>
      <div
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          width: "200px",
        }}
      >
        <Preview />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {inputString && <div>Input: {inputString}</div>}
        {showStored && <div>Stored: {stringify({ value: workingValue })}</div>}
        {showTotal && (
          <div>
            <span>Total: {stringify({ value: totalValue })}</span>
            <TotalUnits />
          </div>
        )}
      </div>
    </div>
  );
}

export * from "./ImperialValueDisplay";
export * from "./MetricValueDisplay";
export * from "./Preview";
export * from "./TotalUnits";
