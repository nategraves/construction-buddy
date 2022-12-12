import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";
import {
  Add,
  Centimeters,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
} from "./Buttons/Functions";

export const Targets = () => {
  const { units } = useContext(ValueContext);

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "space-between",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Add />
      {units === Units.imperial ? (
        <>
          <Feet />
          <Inches />
          <Fractional />
        </>
      ) : (
        <>
          <Meters />
          <Centimeters />
          <Millimeters />
        </>
      )}
    </div>
  );
};
