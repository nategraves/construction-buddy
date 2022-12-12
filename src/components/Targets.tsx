import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";
import { Button } from "./Buttons/Button";
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
  const { units, toggleUnits } = useContext(ValueContext);

  const handleToggleUnits = () => {
    toggleUnits();
  };

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
      <Button onClick={() => handleToggleUnits()}>{units.toUpperCase()}</Button>
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
