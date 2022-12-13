import React, { useContext } from "react";
import { isImperial, isMetric } from "../utils/types";

import { ValueContext } from "../contexts";
import { DisplayValue } from "types";

export function Display() {
  const { displayValue, input, resolution, stored, total } =
    useContext(ValueContext);

  let content = "";

  switch (displayValue) {
    case DisplayValue.input:
      content = input != null ? String(input) : "";
      break;
    default:
      content = "";
  }

  // if (input != null || typeof stored === "number") {
  //   content = input ? String(input) : String(stored);
  // } else if (stored) {
  //   if (isImperial(stored)) {
  //     const { ft, ins, n } = stored;
  //     if (ft != null) {
  //       content += `${stored.ft}ft`;
  //     }
  //     if (ins != null) {
  //       content += ` - ${stored.ins}in`;
  //     }
  //     if (n != null) {
  //       content += ` - ${stored.n}/${resolution}`;
  //     }
  //   }
  //   if (isMetric(stored)) {
  //     if ("m" in stored) {
  //       content += `${stored.m}m`;
  //     }
  //     if ("cm" in stored) {
  //       content += ` - ${stored.cm}cm`;
  //     }
  //     if ("mm" in stored) {
  //       content += ` - ${stored.mm}`;
  //     }
  //   }
  // } else if (total) {
  //   if (isImperial(total)) {
  //     const { ft, ins, n } = total;
  //     if (ft != null) {
  //       content += `${total.ft}ft`;
  //     }
  //     if (ins != null) {
  //       content += ` - ${total.ins}in`;
  //     }
  //     if (n != null) {
  //       content += ` - ${total.n}/${resolution}`;
  //     }
  //   }
  //   if (isMetric(total)) {
  //     if ("m" in total) {
  //       content += `${total.m}m`;
  //     }
  //     if ("cm" in total) {
  //       content += ` - ${total.cm}cm`;
  //     }
  //     if ("mm" in total) {
  //       content += ` - ${total.mm}`;
  //     }
  //   }
  // }

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
