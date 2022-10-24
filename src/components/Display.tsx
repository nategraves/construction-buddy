import React, { useContext } from "react";

import { ValueMode } from "../types";
import { ValueContext } from "../contexts";

export function Display() {
  const { value, mode } = useContext(ValueContext);
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
      {mode === ValueMode.imperial
        ? `${value.imperial.ft}ft - ${value.imperial.in}in - ${value.imperial.fi}/64"`
        : `${value.metric.m}m - ${value.metric.cm}cm - ${value.metric.mm}mm`}
    </div>
  );
}
