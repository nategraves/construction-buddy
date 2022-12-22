import React, { ChangeEvent, useContext } from "react";
import { Units } from "types";

import { ValueContext } from "../../../contexts";

export const SelectUnits = () => {
  const { units, setStored, setTotal, setUnits } = useContext(ValueContext);

  const handleChange = (value: Maybe<Units>) => {
    if (value != null) {
      setUnits(value);
      setStored();
      setTotal();
    }
  };

  units != null && units.charAt(0);
  const options = Object.values(Units).map((unit) => (
    <option value={unit} key={unit}>
      {unit.toUpperCase()}
    </option>
  ));

  return (
    <select
      style={{ height: "48px", margin: "0 8px" }}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        handleChange(
          event.target.value === "" ? undefined : (event.target.value as Units)
        )
      }
      value={units}
    >
      <option value="" key="0"></option>
      {options}
    </select>
  );
};
