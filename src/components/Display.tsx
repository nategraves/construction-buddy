import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { isImperial, isMetric } from "../utils/types";

export function Display() {
  const { input, stored } = useContext(ValueContext);

  let content = "";

  if (input != null || typeof stored === "number") {
    content = input ? String(input) : String(stored);
  } else if (stored && isImperial(stored)) {
    if ("ft" in stored) {
      content += `${stored.ft}ft`;
    }
    if ("in" in stored) {
      content += ` - ${stored.in}in`;
    }
    if ("n" in stored && "d" in stored) {
      content += ` - ${stored.n}/${stored.d}`;
    }
  } else if (stored && isMetric(stored)) {
    if ("m" in stored) {
      content += `${stored.m}m`;
    }
    if ("cm" in stored) {
      content += ` - ${stored.cm}cm`;
    }
    if ("mm" in stored) {
      content += ` - ${stored.mm}`;
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
      {content}
    </div>
  );
}
