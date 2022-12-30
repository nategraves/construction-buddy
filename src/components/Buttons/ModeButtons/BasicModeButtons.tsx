import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Units } from "../../../types";
import {
  Add,
  Clear,
  Centimeters,
  Divide,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
  Multiply,
  Equals,
  SelectResolution,
  SelectUnits,
  Square,
  Subtract,
} from "../FunctionButtons";

export const BasicModeButtons = () => {
  const { units } = useContext(ValueContext);

  units != null && units.charAt(0).toUpperCase();

  return (
    <>
      <div
        style={{
          padding: "10px 0 0",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          width: "400px",
          alignItems: "center",
        }}
      >
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
        {units === Units.imperial && (
          <>
            <Feet />
            <Inches />
            <Fractional />
          </>
        )}
        {units === Units.metric && (
          <>
            <Meters />
            <Centimeters />
            <Millimeters />
          </>
        )}
      </div>
      <div>
        <Multiply />
        <Square />
        <Divide />
        <Subtract />
        <Clear />
        <Equals />
        <Add />
      </div>
    </>
  );
};
