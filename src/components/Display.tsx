import React, { useContext } from "react";
import { isImperial, isMetric, isNumber } from "../utils/types";

import { ValueContext } from "../contexts";

export function Display() {
  const { input, resolution, stored, total } = useContext(ValueContext);

  let inputDisplay, storedDisplay, totalDisplay;

  if (input != null) {
    inputDisplay = String(input);
  }

  if (stored != null) {
    if (isImperial(stored)) {
      if ("ft" in stored) {
        storedDisplay += `${stored.ft}ft`;
      }
      if ("ins" in stored) {
        storedDisplay += ` - ${stored.ins}in`;
      }
      if ("n" in stored) {
        storedDisplay += ` - ${stored.n}/${resolution}`;
      }
    } else if (isMetric(stored)) {
      if ("m" in stored) {
        storedDisplay += `${stored.m}m`;
      }
      if ("cm" in stored) {
        storedDisplay += ` - ${stored.cm}cm`;
      }
      if ("mm" in stored) {
        storedDisplay += ` - ${stored.mm}`;
      }
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
      {inputDisplay != null && <div>{inputDisplay}</div>}
      {storedDisplay != null && <div>{storedDisplay}</div>}
      {totalDisplay != null && <div>{totalDisplay}</div>}
    </div>
  );
}
