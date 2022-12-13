import React, { ChangeEvent, useContext } from "react";
import { Resolution } from "types";

import { ValueContext } from "../../../contexts";

export const SelectRoles = () => {
  const { resolution, setResolution } = useContext(ValueContext);

  const handleChange = (value: Maybe<Resolution>) => {
    if (value != null) {
      setResolution(value);
    }
  };

  return (
    <select
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        handleChange(
          event.target.value === ""
            ? undefined
            : (event.target.value as unknown as Resolution)
        )
      }
      value={resolution}
    >
      <option value="" key="0"></option>
      {Object.keys(Resolution).map((resolution) => (
        <option value={resolution} key={resolution}>
          {resolution}
        </option>
      ))}
    </select>
  );
};
