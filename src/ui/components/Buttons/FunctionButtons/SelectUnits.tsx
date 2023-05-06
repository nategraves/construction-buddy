import React, { ChangeEvent, useContext } from 'react';
import { Units } from '~/types';

import { ValueContext } from '~/contexts';

export const SelectUnits = () => {
  const { units, setWorkingValue, setTotalValue, setUnits } = useContext(ValueContext);

  const handleChange = (value: Maybe<Units>) => {
    if (value != null) {
      setUnits(value);
      setWorkingValue();
      setTotalValue();
    }
  };

  units != null && units.charAt(0);
  const options = Object.values(Units).map((unit: string) => (
    <option value={unit} key={unit}>
      {unit.toUpperCase()}
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
