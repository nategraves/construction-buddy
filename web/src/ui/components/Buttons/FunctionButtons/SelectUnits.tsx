import React, { ChangeEvent, useContext } from 'react';
import { Units } from 'src/data';

import { ValueContext } from 'src/contexts';

export const SelectUnits = () => {
  const { units, setWorkingValue, setUnits } = useContext(ValueContext);

  const handleChange = (value: Units | undefined) => {
    if (value != null) {
      setUnits(value);
      setWorkingValue();
    }
  };

  units != null && units.charAt(0);
  const options = Object.values(Units).map((unit: unknown) => (
    <option value={unit as string} key={unit as string}>
      {(unit as string).toUpperCase()}
    </option>
  ));

  return (
    <select
      style={{ height: '48px', margin: '0 8px' }}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        handleChange(event.target.value === '' ? undefined : (event.target.value as Units))
      }
      value={units ?? undefined}
    >
      <option value="" key="0"></option>
      {options}
    </select>
  );
};
