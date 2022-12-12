import React, { ChangeEvent, useContext } from "react";
import { Units } from "types";

import { ValueContext } from "../../../contexts";

export const SelectUnits = () => {
  const { units, setUnits } = useContext(ValueContext);

  const handleChange = (value: Maybe<Units>) => {
    if (value != null) {
      setUnits(value);
    }
  };

  units != null && units.charAt(0);

  return (
    <select
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        handleChange(
          event.target.value === "" ? undefined : (event.target.value as Units)
        )
      }
      value={units}
    >
      <option value="" key="0"></option>
      {Object.values(Units).map((unit) => (
        <option value={unit} key={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};
