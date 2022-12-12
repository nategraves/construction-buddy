import React, { useContext } from "react";
import { isImperial, isMetric } from "../utils/types";

import { ValueContext } from "../contexts";

export function Display() {
  const { input, resolution, stored } = useContext(ValueContext);

  let content = "";

  if (input != null || typeof stored === "number") {
    content = input ? String(input) : String(stored);
  } else if (stored) {
    if (isImperial(stored)) {
      const { ft, ins, n } = stored;
      if (ft != null) {
        content += `${stored.ft}ft`;
      }
      if (ins != null) {
        content += ` - ${stored.ins}in`;
      }
      if (n != null) {
        content += ` - ${stored.n}/${resolution}`;
      }
    }
    if (isMetric(stored)) {
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
