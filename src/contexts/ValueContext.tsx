import * as React from "react";

import {
  ImperialTarget,
  ImperialValue,
  MetricTarget,
  MetricValue,
  Units,
  ValueTarget,
} from "../types";

interface Value {
  [Units.imperial]: ImperialValue;
  [Units.metric]: MetricValue;
}

interface ValueContextProps {
  units: Units;
  value: Value;
  valueTarget: Maybe<ValueTarget>;
  valueTargetless: Maybe<number>;
  setValue: (value: Value) => void;
  setValueTarget: (valueTarget: ValueTarget) => void;
  setValueTargetless: (value: number) => void;
  toggleUnits: () => void;
}

export const defaultValue = {
  [Units.imperial]: {
    [ImperialTarget.ft]: 0,
    [ImperialTarget.in]: 0,
    [ImperialTarget.fi]: 0,
  },
  [Units.metric]: {
    [MetricTarget.m]: 0,
    [MetricTarget.cm]: 0,
    [MetricTarget.mm]: 0,
  },
};

export const ValueContext = React.createContext<ValueContextProps>({
  units: Units.imperial,
  value: defaultValue,
  valueTarget: undefined,
  valueTargetless: undefined,
  setValue: (value) => {},
  setValueTarget: (valueTarget) => {},
  setValueTargetless: (value) => {},
  toggleUnits: () => {},
});

export const ValueProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = React.useState(defaultValue);
  const [units, setUnits] = React.useState(Units.imperial);
  const [valueTarget, setValueTarget] = React.useState<ValueTarget>();
  const [valueTargetless, setValueTargetless] = React.useState<Maybe<number>>();

  const toggleUnits = () =>
    setUnits(units === Units.imperial ? Units.metric : Units.imperial);

  return (
    <ValueContext.Provider
      value={{
        units,
        value,
        valueTarget,
        valueTargetless,
        setValue,
        setValueTarget,
        setValueTargetless,
        toggleUnits,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
