import React, { useContext } from 'react';

import { ValueContext } from '~/contexts';
import { Units } from '~/types';
import {
  Add,
  Diagonal,
  Divide,
  Equals,
  MemoryAdd,
  MemoryClear,
  MemoryRecall,
  Multiply,
  Percent,
  Rise,
  Run,
  SelectResolution,
  SelectUnits,
  Square,
  SquareRoot,
  Subtract,
  Centimeters,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
} from '~/ui';
export const BasicModeButtons = () => {
  const { units } = useContext(ValueContext);

  units != null && units.charAt(0).toUpperCase();

  return (
    <>
      <div
        style={{
          padding: '10px 0 0',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'flex-start',
          width: '400px',
          alignItems: 'center',
        }}
      >
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
        {units === Units.imperial && (
          <>
            <Feet />
            <Inches />
            <Fractional />
          </>
        )}
        {units === Units.metric && (
          <>
            <Meters />
            <Centimeters />
            <Millimeters />
          </>
        )}
        <Multiply />
        <Square />
        <SquareRoot />
        <Divide />
        <Subtract />
        <Add />
        <Percent />
        <Equals />
        <MemoryAdd />
        <MemoryRecall />
        <MemoryClear />
        <Rise />
        <Run />
        <Diagonal />
      </div>
    </>
  );
};
