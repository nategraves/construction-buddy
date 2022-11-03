import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export function Digits() {
  const { input, setInput } = useContext(ValueContext);

  const handleButtonPress = (n: number) => {
    const num = (o: Maybe<number>, n: number) =>
      parseInt(o != null ? `${o}${n}` : `${n}`, 10);

    setInput(num(input, n));
  };

  return (
    <div
      style={{
        padding: "10px",
        // display: "flex",
        // flexFlow: "row wrap",
        // alignItems: "space-between",
        // justifyContent: "flex-start",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "100%",
      }}
    >
      {Array.from(Array(10).keys())
        .reverse()
        .map((i) => (
          <Button key={`button-${i}`} onClick={() => handleButtonPress(i)}>
            {String(i)}
          </Button>
        ))}
    </div>
  );
}
