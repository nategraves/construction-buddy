import React, { useContext } from "react";
import { isImperial, isMetric, isNumber } from "../utils/types";

import { Mode } from "../types";

import { ValueContext } from "../contexts";

export function Display() {
  const { input, mode, resolution, stored, total } = useContext(ValueContext);

  let inputDisplay = "";
  let storedDisplay = "";
  let totalDisplay = "";

  if (input != null) {
    inputDisplay = String(input);
  }

  if (stored != null) {
    const measurements = [];
    if (isImperial(stored)) {
      const { ft, ins, n } = stored;
      if (ft != null) {
        measurements.push(`${ft}ft`);
      }
      if (ins != null) {
        measurements.push(`${ins}in`);
      }
      if (n != null) {
        measurements.push(`${stored.n}/${resolution}`);
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
      if ("n" in total) {
        totalDisplay += ` - ${total.n}/${resolution}`;
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
      {mode !== Mode.equals && input != null && stored == null && (
        <div>{inputDisplay}</div>
      )}
      {mode !== Mode.equals && input == null && stored != null && (
        <div>{storedDisplay}</div>
      )}
      {mode === Mode.equals && total != null && <div>{totalDisplay}</div>}
    </div>
  );
}
