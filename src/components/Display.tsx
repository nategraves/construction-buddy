import React, { useContext } from "react";
import { Units } from "types";

import { ValueContext } from "../contexts";

export function Display() {
  const { input, mode, stored, units } = useContext(ValueContext);

  let value = input;
  let label = "";

  if (units === Units.imperial) {
    label = "in";
  }

  if (units === Units.metric) {
    label = "cm";
  }

  if (!mode && stored != null) {
    value = stored;
  }

  console.log({ input, stored });

  let content = value != null ? `${value} ${label}` : undefined;

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
