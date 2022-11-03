import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { isImperial, isMetric } from "../utils/types";

export function Display() {
  const { input, stored } = useContext(ValueContext);

  let content = "";

  if (input != null || typeof stored === "number") {
    content = String(input) ?? String(stored);
  }

  if (stored && isImperial(stored)) {
    // @ts-expect-error
    if ("ft" in stored) {
      content += `${stored.ft}ft`;
    }
    // @ts-expect-error
    if ("in" in stored) {
      content += ` - ${stored.in}in`;
    }
    // @ts-expect-error
    if ("n" in stored && "d" in stored) {
      content += ` - ${stored.n}/${stored.d}`;
    }
  }

  if (stored && isMetric(stored)) {
    // @ts-expect-error
    if ("m" in stored) {
      content += `${stored.m}m`;
    }
    // @ts-expect-error
    if ("cm" in stored) {
      content += ` - ${stored.cm}cm`;
    }
    // @ts-expect-error
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
