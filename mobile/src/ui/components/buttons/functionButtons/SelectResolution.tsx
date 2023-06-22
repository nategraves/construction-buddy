import React, { useContext } from 'react';
import { Box, Select } from 'native-base';

import { ValueContext } from 'src/contexts';
import { Resolution, Units } from 'src/data';
import { View } from 'react-native';

export const SelectResolution = () => {
  const { resolution, units, setResolution } = useContext(ValueContext);

  const handleChange = (value: Resolution) => {
    setResolution(value);
  };

  const resolutionValues = Object.values(Resolution);
  const options = resolutionValues
    .splice(resolutionValues.length / 2)
    .map((resolution) => (
      <Select.Item
        value={resolution.toString()}
        key={resolution}
        label={resolution.toString()}
        color="black"
      />
    ));

  if (units !== Units.imperial) {
    return null;
  }

  return (
    <Box>
      <Select
        backgroundColor={'#EEEEEE'}
        width="150"
        // minWidth={32}
        onValueChange={(itemValue) =>
          handleChange(itemValue as unknown as Resolution)
        }
        selectedValue={resolution.toString()}
      >
        {options}
      </Select>
    </Box>
  );
};
