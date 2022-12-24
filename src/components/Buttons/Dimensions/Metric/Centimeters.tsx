import React from "react";

// import { ValueContext } from "../../../contexts";
// import { Units } from "../../../types";
import { Button } from "../../Button";

export function Centimeters() {
  // const { input, workingValue, setInput, setWorkingValue, setUnits, units } =
  //   useContext(ValueContext);

  const handleClick = () => {
    throw new Error("Need to implement");
    // if (input != null) {
    //   if (units === Units.metric) {
    //     setWorkingValue(input + workingValue ?? 0);
    //   } else {
    //     setUnits(Units.metric);
    //     setWorkingValue(input);
    //   }

    //   setInput(null);
    // }
  };

  return <Button onClick={() => handleClick()}>CM</Button>;
}
