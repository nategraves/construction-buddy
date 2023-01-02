import React, { useContext } from "react";

import { Button } from "../Button";
import { ValueContext } from "../../../contexts";
import { Clear } from "../FunctionButtons";

export const NumericButtons = () => {
  const { inputString, setInputString } = useContext(ValueContext);

  const handleButtonPress = (n: number | ".") => {
    if (String(n).match(/(:?\d|\.)/g) === null) {
      return;
    }

    setInputString(`${inputString ?? ""}${n}`);
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "300px",
      }}
    >
      <Button key={`button-${7}`} onClick={() => handleButtonPress(7)}>
        {String(7)}
      </Button>
      <Button key={`button-${8}`} onClick={() => handleButtonPress(8)}>
        {String(8)}
      </Button>
      <Button key={`button-${9}`} onClick={() => handleButtonPress(9)}>
        {String(9)}
      </Button>

      <Button key={`button-${4}`} onClick={() => handleButtonPress(4)}>
        {String(4)}
      </Button>
      <Button key={`button-${5}`} onClick={() => handleButtonPress(5)}>
        {String(5)}
      </Button>
      <Button key={`button-${6}`} onClick={() => handleButtonPress(6)}>
        {String(6)}
      </Button>

      <Button key={`button-${1}`} onClick={() => handleButtonPress(1)}>
        {String(1)}
      </Button>
      <Button key={`button-${2}`} onClick={() => handleButtonPress(2)}>
        {String(2)}
      </Button>
      <Button key={`button-${3}`} onClick={() => handleButtonPress(3)}>
        {String(3)}
      </Button>

      <Button key={`button-decimal`} onClick={() => handleButtonPress(".")}>
        .
      </Button>
      <Button key={`button-${0}`} onClick={() => handleButtonPress(0)}>
        {String(0)}
      </Button>
      <Clear />
    </div>
  );
};
