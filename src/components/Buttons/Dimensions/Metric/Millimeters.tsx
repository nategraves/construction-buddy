import React from "react";

// import { ValueContext } from "../../../contexts";
// import { Units } from "../../../types";
import { Button } from "../../Button";
// import { useIsMetric } from "utils/types";

export function Millimeters() {
  // const { input, workingValue, setInput, setWorkingValue, setUnits } = useContext(ValueContext);
  // const isMetric = useIsMetric();

  const handleClick = () => {
    throw new Error("Implement");
    // if (input != null) {
    //   if (isMetric) {
    //     setWorkingValue(workingValue ?? 0 + input);
    //   } else {
    //     setUnits(Units.metric);
    //     setWorkingValue(input);
    //   }
    //   setInput(null);
    // }
  };

  return <Button onClick={() => handleClick()}> MM </Button>;
}
