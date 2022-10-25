import React, { useContext } from "react";

import { Units } from "../types";
import { ValueContext } from "../contexts";

export function Display() {
  const { value, units, valueTarget, valueTargetless } =
    useContext(ValueContext);

  let content = "";

  console.log({ value, mode: units, valueTarget, valueTargetless });

  if (valueTarget == null && valueTargetless != null) {
    content = String(valueTargetless);
  }

  if (valueTarget != null) {
    content =
      units === Units.imperial
        ? `${value.imperial.ft}ft - ${value.imperial.in}in - ${value.imperial.fi}/64"`
        : `${value.metric.m}m - ${value.metric.cm}cm - ${value.metric.mm}mm`;
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
