import React, { useContext } from "react";

import { ValueContext } from "../contexts";

export function Display() {
  const { input, stored } = useContext(ValueContext);

  let content = "";

  if (input == null && stored != null) {
    content = String(stored);
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
