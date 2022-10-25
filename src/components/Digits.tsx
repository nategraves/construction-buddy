import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Button } from "./Button";

export function Digits() {
  const {
    setValue,
    setValueTargetless,
    value,
    valueTarget,
    valueTargetless,
    units,
  } = useContext(ValueContext);

  const handleButtonPress = (n: number) => {
    const num = (o: Maybe<number>, n: number) =>
      parseInt(o != null ? `${o}${n}` : `${n}`, 10);

    if (valueTarget) {
      value[units][valueTarget] = num(value[units][valueTarget], n);
      setValue({ ...value });
    } else {
      setValueTargetless(num(valueTargetless, n));
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "space-between",
        justifyContent: "flex-start",
        width: "100$",
      }}
    >
      {Array.from(Array(10).keys()).map((i) => (
        <Button key={`button-${i}`} action={() => handleButtonPress(i)}>
          {String(i)}
        </Button>
      ))}
    </div>
  );
}
