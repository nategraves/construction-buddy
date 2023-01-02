import React, { useContext } from "react";
import { isImperial, isMetric, isNumber } from "../../data/Value";

import { ValueContext } from "../../contexts";
import { Preview } from "./Preview";
import { TotalUnits } from "./TotalUnits";
import { FractionDisplay } from "./FractionDisplay";

export function Display() {
  const { inputString, mode, workingValue, totalValue } =
    useContext(ValueContext);

  let inputDisplay = "";
  let storedDisplay = "";
  let totalDisplay = "";

  if (inputString != null) {
    inputDisplay = inputString;
  }

  if (workingValue != null) {
    const measurements = [];
    if (isImperial(workingValue)) {
      const { ft, ins, fr } = workingValue;
      if (ft != null) {
        measurements.push(`${ft}ft`);
      }
      if (ins != null) {
        measurements.push(`${ins}in`);
      }
      if (fr != null && fr.n !== 0) {
        measurements.push(`${workingValue.fr.n}/${workingValue.fr.d}`);
      }
      storedDisplay = measurements.join(" - ");
    } else if (isMetric(workingValue)) {
      const { m, cm, mm } = workingValue;
      if (m != null) {
        measurements.push(`${workingValue.m}m`);
      }
      if (cm != null) {
        measurements.push(`${workingValue.cm}cm`);
      }
      if (mm != null) {
        measurements.push(`${workingValue.mm}`);
      }
      storedDisplay = measurements.join(" - ");
    } else if (isNumber(workingValue)) {
      storedDisplay = `${workingValue}`;
    }
  }

  if (totalValue != null) {
    if (isImperial(totalValue)) {
      const { ft, ins, fr } = totalValue;
      if (ft != null) {
        totalDisplay += `${ft}ft`;
      }
      if (ins != null) {
        totalDisplay += ` - ${ins}in`;
      }
      if (fr != null && fr.n !== 0) {
        totalDisplay += ` - ${totalValue.fr.n}/${totalValue.fr.d}`;
      }
    } else if (isMetric(totalValue)) {
      if ("m" in totalValue) {
        totalDisplay += `${totalValue.m}m`;
      }
      if ("cm" in totalValue) {
        totalDisplay += ` - ${totalValue.cm}cm`;
      }
      if ("mm" in totalValue) {
        totalDisplay += ` - ${totalValue.mm}`;
      }
    } else if (isNumber(totalValue)) {
      totalDisplay = `${totalValue}`;
    }
  }
  const showInput = inputDisplay != null && inputDisplay !== "";
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
        {showInput && <div>Input: {inputDisplay}</div>}
        {showStored && <div>Stored: {storedDisplay}</div>}
        {showTotal && (
          <div>
            <span>Total: {totalDisplay}</span>
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
