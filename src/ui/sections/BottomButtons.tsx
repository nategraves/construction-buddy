import React, { useContext } from 'react';
import {
  Add,
  Centimeters,
  Delete,
  Divide,
  Equals,
  Feet,
  Fractional,
  Inches,
  Meters,
  Millimeters,
  Multiply,
  NumericButton,
  Subtract,
} from '../components';
import { ValueContext } from 'src/contexts';
import { Units } from 'src/data';

export const BottomButtons = () => {
  const { units } = useContext(ValueContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="buttonRow">
        <Divide />
        <NumericButton value={7} />
        <NumericButton value={8} />
        <NumericButton value={9} />
        {units === Units.imperial ? <Fractional /> : <Millimeters />}
      </div>
      <div className="buttonRow">
        <Multiply />
        <NumericButton value={4} />
        <NumericButton value={5} />
        <NumericButton value={6} />
        {units === Units.imperial ? <Inches /> : <Centimeters />}
      </div>
      <div className="buttonRow">
        <Subtract />
        <NumericButton value={1} />
        <NumericButton value={2} />
        <NumericButton value={3} />
        {units === Units.imperial ? <Feet /> : <Meters />}
      </div>
      <div className="buttonRow">
        <Add />
        <NumericButton value="." />
        <NumericButton value={0} />
        <Delete />
        <Equals />
      </div>
    </div>
  );
};
