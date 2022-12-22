import React from "react";

// import { ValueContext } from "../../../contexts";
// import { Units } from "../../../types";
// import { useIsMetric } from "../../../utils/types";
import { Button } from "../../Button";

export function Meters() {
  // const { input, stored, setInput, setStored, setUnits } =
  //   useContext(ValueContext);

  // const isMetric = useIsMetric();

  const handleClick = () => {
    throw new Error("Implement");
    // if (input != null) {
    //   if (isMetric) {
    //     setStored(stored ?? 0 + input * 10);
    //   } else {
    //     setUnits(Units.metric);
    //     setStored(input);
    //   }
    //   setInput(null);
    // }
  };

  return <Button onClick={() => handleClick()}>M</Button>;
}
