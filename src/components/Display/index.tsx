import React, { useContext } from "react";
import { isImperial, isMetric, isNumber } from "../../data/Value";

import { ValueContext } from "../../contexts";

export function Display() {
  const { input, mode, stored, total } = useContext(ValueContext);

  let inputDisplay = "";
  let storedDisplay = "";
  let totalDisplay = "";

  if (input != null) {
    inputDisplay = String(input);
  }

  if (stored != null) {
    const measurements = [];
    console.log("Stored imperial", isImperial(stored));
    if (isImperial(stored)) {
      const { ft, ins, fr } = stored;
      if (ft != null) {
        measurements.push(`${ft}ft`);
      }
      if (ins != null) {
        measurements.push(`${ins}in`);
      }
      if (fr != null) {
        measurements.push(`${stored.fr}`);
      }
      storedDisplay = measurements.join(" - ");
    } else if (isMetric(stored)) {
      const { m, cm, mm } = stored;
      if (m != null) {
        measurements.push(`${stored.m}m`);
      }
      if (cm != null) {
        measurements.push(`${stored.cm}cm`);
      }
      if (mm != null) {
        measurements.push(`${stored.mm}`);
      }
      storedDisplay = measurements.join(" - ");
    } else if (isNumber(stored)) {
      storedDisplay = `${stored}`;
    }
  }

  if (total != null) {
    if (isImperial(total)) {
      if ("ft" in total) {
        totalDisplay += `${total.ft}ft`;
      }
      if ("ins" in total) {
        totalDisplay += ` - ${total.ins}in`;
      }
      if ("fr" in total) {
        totalDisplay += ` - ${total.fr}`;
      }
    } else if (isMetric(total)) {
      if ("m" in total) {
        totalDisplay += `${total.m}m`;
      }
      if ("cm" in total) {
        totalDisplay += ` - ${total.cm}cm`;
      }
      if ("mm" in total) {
        totalDisplay += ` - ${total.mm}`;
      }
    } else if (isNumber(total)) {
      totalDisplay = `${total}`;
    }
  }
  const showInput = input != null;
  const showStored = input == null && stored != null;
  const showTotal = input == null && stored == null && total != null;

  console.log({ showInput, inputDisplay });
  console.log({ showStored, storedDisplay });
  console.log({ showTotal, totalDisplay });

  return (
    <div
      style={{
        alignContent: "center",
        background: "#eee",
        backgroundColor: "#d4d4d4",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "150px",
        width: "100%",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        Mode: {mode}
      </div>
      {showInput && <div>Input: {inputDisplay}</div>}
      {showStored && <div>Stored: {storedDisplay}</div>}
      {showTotal && <div>Total: {totalDisplay}</div>}
    </div>
  );
}
