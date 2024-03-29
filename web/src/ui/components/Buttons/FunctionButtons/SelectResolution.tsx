import React, { ChangeEvent, useContext } from 'react';
import { ValueContext } from 'src/contexts';
import { Resolution } from 'src/data';

export const SelectResolution = () => {
  const { resolution, setResolution } = useContext(ValueContext);

  const handleChange = (value: Resolution | undefined) => {
    setResolution(value ?? undefined);
  };

  const resolutionValues = Object.values(Resolution);
  const options = resolutionValues.splice(resolutionValues.length / 2).map((resolution) => (
    <option value={resolution as string} key={resolution as string}>
      {resolution as string}
    </option>
  ));

  return (
    <select
      style={{ height: '48px', margin: '0 8px' }}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        handleChange(
          event.target.value === '' ? undefined : (event.target.value as unknown as Resolution),
        )
      }
      value={resolution ?? undefined}
    >
      <option value="" key="0"></option>
      {options}
    </select>
  );
};
