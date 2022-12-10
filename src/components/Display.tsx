import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";

export function Display() {
  const { input, stored, units } = useContext(ValueContext);

  let content = input
    ? `${String(input)}-${units === Units.imperial ? "in" : "cm"}`
    : String(stored);

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
