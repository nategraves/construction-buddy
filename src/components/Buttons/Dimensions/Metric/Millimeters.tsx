import React from "react";

// import { ValueContext } from "../../../contexts";
// import { Units } from "../../../types";
import { Button } from "../../Button";
// import { useIsMetric } from "utils/types";

export function Millimeters() {
  // const { input, stored, setInput, setStored, setUnits } = useContext(ValueContext);
  // const isMetric = useIsMetric();

  const handleClick = () => {
    throw new Error("Implement");
    // if (input != null) {
    //   if (isMetric) {
    //     setStored(stored ?? 0 + input);
    //   } else {
    //     setUnits(Units.metric);
    //     setStored(input);
    //   }
    //   setInput(null);
    // }
  };

  return <Button onClick={() => handleClick()}> Millimeters </Button>;
}
