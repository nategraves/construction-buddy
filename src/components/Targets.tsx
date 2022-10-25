import * as React from "react";

import { defaultValue, ValueContext } from "../contexts";
import { Units, ImperialTarget, MetricTarget, ValueTarget } from "../types";
import { Button } from "./Button";

export const Targets = () => {
  const {
    units,
    value,
    valueTarget,
    valueTargetless,
    setValue,
    setValueTarget,
    setValueTargetless,
    toggleUnits,
  } = React.useContext(ValueContext);

  const handleToggleUnits = () => {
    toggleUnits();
    // TODO: FIX THIS
    // @ts-ignore
    value[units] = defaultValue[units];
    setValue({ ...value });
  };

  const handleTargetPress = (newValueTarget: ValueTarget) => {
    if (newValueTarget != null || valueTargetless == null) {
      return;
    }

    setValueTarget(newValueTarget);
    value[units][newValueTarget] = valueTargetless;
    setValue({ ...value });
    setValueTargetless(undefined);
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "space-between",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Button action={() => handleToggleUnits()}>{units}</Button>
      {units === Units.imperial ? (
        <>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(ImperialTarget.ft)}
          >
            Feet
          </Button>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(ImperialTarget.in)}
          >
            Inches
          </Button>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(ImperialTarget.fi)}
          >
            Frac.
          </Button>
        </>
      ) : (
        <>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(MetricTarget.m)}
          >
            Meters
          </Button>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(MetricTarget.cm)}
          >
            Centi
          </Button>
          <Button
            disabled={valueTarget != null}
            action={() => handleTargetPress(MetricTarget.mm)}
          >
            Milli
          </Button>
        </>
      )}
    </div>
  );
};
