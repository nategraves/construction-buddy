import React, { useContext } from "react";

import { ValueContext } from "../contexts";
import { Button } from "./Button";

export function Digits() {
  const { setValue, value } = useContext(ValueContext);
  const handleButtonPress = (num: number) => {
    console.log({ pressed: num });
    value.imperial.ft = parseInt(`${value.imperial.ft}${num}`, 10);
    setValue({ ...value });
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
