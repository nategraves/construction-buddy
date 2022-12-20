import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";
import {
  Add,
  Clear,
  Centimeters,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
  Equals,
  SelectResolution,
  SelectUnits,
} from "./Buttons/Functions";
import { Button } from "./Buttons/Button";

export const PrimaryButtons = () => {
  const { units } = useContext(ValueContext);
  const { input, setInput } = useContext(ValueContext);

  const handleButtonPress = (n: number) => {
    const num = (o: Maybe<number>, n: number) =>
      parseInt(o != null ? `${o}${n}` : `${n}`, 10);

    setInput(num(input, n));
  };

  units != null && units.charAt(0).toUpperCase();

  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "space-between",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
        <Add />
        <Equals />
        <Clear />
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
      <div
        style={{
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "100%",
          maxWidth: "480px",
        }}
      >
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((i) => (
          <Button key={`button-${i}`} onClick={() => handleButtonPress(i)}>
            {String(i)}
          </Button>
        ))}
      </div>
    </>
  );
};
