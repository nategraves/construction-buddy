import React, { useContext } from 'react';
import { Box, Select } from 'native-base';

import { Units } from 'src/data';
import { ValueContext } from 'src/contexts';
import { View } from 'react-native';

export const SelectUnits = () => {
  const { units, clearCalculationSteps, setWorkingValue, setUnits } =
    useContext(ValueContext);

  const handleChange = (value: Units) => {
    if (value != null) {
      setUnits(value as Units);
      setWorkingValue();
      clearCalculationSteps();
    }
  };

  units != null && units.charAt(0);
  const options = Object.values(Units).map((unit) => (
    <Select.Item
      value={unit.toString()}
      key={unit}
      label={unit.toUpperCase()}
    />
  ));

  return (
    <Box>
      <Select
        backgroundColor={'#EEEEEE'}
        width="150"
        // minWidth={32}
        onValueChange={(itemValue) => {
          handleChange(itemValue as Units);
        }}
        selectedValue={units}
      >
        {options}
      </Select>
    </Box>
  );
};
