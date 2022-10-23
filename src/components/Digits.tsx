import * as React from "react";

import { Button } from "./Button";

interface DigitsProps {
  setValue: (value: number) => void;
}

export function Digits(props: DigitsProps) {
  const { setValue } = props;
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
      {Array.from(Array(10).keys()).map((_, i) => (
        <Button action={() => setValue(i)}>{String(i)}</Button>
      ))}
    </div>
  );
}
