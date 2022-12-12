import React from "react";

// import { ValueContext } from "../../../contexts";
// import { Units } from "../../../types";
// import { useIsImperial } from "../../../utils/types";
import { Button } from "../../Button";

export function Feet() {
  // const { input, stored, setInput, setStored, setUnits } =
  //   useContext(ValueContext);
  // const isImperial = useIsImperial();

  const handleClick = () => {
    throw new Error("Implement");
    // if (input != null) {
    //   if (isImperial) {
    //     setStored(stored ?? 0 + input * 12);
    //   } else {
    //     setUnits(Units.imperial);
    //     setStored(input * 12);
    //   }

    //   setInput();
    // }
  };

  return <Button onClick={() => handleClick()}>Feet</Button>;
}
