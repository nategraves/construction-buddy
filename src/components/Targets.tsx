import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";
import { Button } from "./Buttons/Button";
import {
  Add,
  Clear,
  Centimeters,
  Feet,
  // Fractional,
  Inches,
  Meters,
  Millimeters,
  Equals,
  SelectUnits,
} from "./Buttons/Functions";

export const Targets = () => {
  const { units } = useContext(ValueContext);

  units != null && units.charAt(0).toUpperCase();

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
      <SelectUnits />
      <Add />
      <Equals />
      <Clear />
      {units === Units.imperial ? (
        <>
          <Feet />
          <Inches />
          {/* <Fractional /> */}
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
