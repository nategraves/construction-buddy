import React from "react";
import { Fraction } from "mathjs";

export const FractionDisplay = ({ fraction }: { fraction: Fraction }) => {
  const { n, d } = fraction;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{n}</span>
      <hr />
      <span>{d}</span>
    </div>
  );
};
