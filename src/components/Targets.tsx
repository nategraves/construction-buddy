import * as React from "react";

import { ValueContext } from "../contexts";
import { ValueMode, ImperialTarget, MetricTarget, ValueTarget } from "../types";
import { Button } from "./Button";

export const Targets = () => {
  const {
    mode,
    value,
    valueTarget,
    valueTargetless,
    setValue,
    setValueTarget,
    setValueTargetless,
    toggleValueMode,
  } = React.useContext(ValueContext);

  const handleTargetPress = (newValueTarget: ValueTarget) => {
    if (newValueTarget != null || valueTargetless == null) {
      return;
    }

    setValueTarget(newValueTarget);
    value[mode][newValueTarget] = valueTargetless;
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
      <Button action={() => toggleValueMode()}>{mode}</Button>
      {mode === ValueMode.imperial ? (
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
