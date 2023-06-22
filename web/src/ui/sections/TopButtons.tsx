import React, { useContext } from 'react';
import {
  Clear,
  Diagonal,
  MemoryAdd,
  MemoryClear,
  MemoryRecall,
  Percent,
  Rise,
  Run,
  SelectResolution,
  SelectUnits,
  Square,
  SquareRoot,
} from '../components';
import { ValueContext } from 'src/contexts';
import { Units } from 'src/data';

export const TopButtons = () => {
  const { units } = useContext(ValueContext);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="buttonRow">
        <SelectUnits />
        {units === Units.imperial && <SelectResolution />}
        <MemoryAdd />
        <MemoryRecall />
        <MemoryClear />
      </div>
      <div className="buttonRow">
        <Clear />
        <Rise />
        <Run />
        <Diagonal />
      </div>
      <div className="buttonRow">
        <Percent />
        <Square />
        <SquareRoot />
      </div>
    </div>
  );
};
