import React, { ChangeEvent, useContext } from "react";
import { Resolution } from "../../../types";
import { ValueContext } from "../../../contexts";

export const SelectResolution = () => {
  const { resolution, setResolution } = useContext(ValueContext);

  const handleChange = (value: Maybe<Resolution>) => {
    setResolution(value);
  };

  const resolutionValues = Object.values(Resolution);
  const options = resolutionValues
    .splice(resolutionValues.length / 2)
    .map((resolution) => (
      <option value={resolution as string} key={resolution as string}>
        {resolution as string}
      </option>
    ));

  return (
    <select
      style={{ height: "48px", margin: "0 8px" }}
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
      {options}
    </select>
  );
};
