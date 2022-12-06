import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { ImperialTarget } from "../types";
import { isImperial, isMetric } from "../utils/types";

export function Display() {
  const { input, stored } = useContext(ValueContext);

  let content = "";

  if (input != null || typeof stored === "number") {
    content = input ? String(input) : String(stored);
  } else if (stored && isImperial(stored)) {
    if (ImperialTarget.ft in stored) {
      content += `${stored.ft}ft`;
    }
    if (ImperialTarget.in in stored) {
      content += ` - ${stored.in}in`;
    }
    if (ImperialTarget.n in stored && stored[ImperialTarget.n] != null) {
      content += ` - ${stored.n} / `;
    }
    if (ImperialTarget.d in stored && stored[ImperialTarget.d] != null) {
      content += stored.d;
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
