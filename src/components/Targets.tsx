import * as React from "react";

import { defaultValue, ValueContext } from "../contexts";
import { Units, ImperialTarget, MetricTarget, ValueTarget } from "../types";
import { Button } from "./Buttons/Button";
import { Feet } from "./Buttons/Functions/Feet";

export const Targets = () => {
  const {
    units,
    input,
    // valueTarget,
    // valueTargetless,
    // setValue,
    // setValueTarget,
    // setValueTargetless,
    toggleUnits,
  } = React.useContext(ValueContext);

  const handleToggleUnits = () => {
    toggleUnits();
    // TODO: FIX THIS
    // @ts-ignore
    value[units] = defaultValue[units];
    // setValue({ ...value });
  };

  const handleTargetPress = (newValueTarget: ValueTarget) => {
    if (newValueTarget != null) {
      return;
    }

    // setValueTarget(newValueTarget);
    // value[units][newValueTarget] = valueTargetless;
    // setValue({ ...value });
    // setValueTargetless(undefined);
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
      <Button onClick={() => handleToggleUnits()}>{units}</Button>
      {units === Units.imperial ? (
        <>
          <Feet />
          <Button
            // disabled={valueTarget != null}
            onClick={() => handleTargetPress(ImperialTarget.in)}
          >
            Inches
          </Button>
          <Button
            // disabled={valueTarget != null}
            onClick={() => handleTargetPress(ImperialTarget.fr)}
          >
            Frac.
          </Button>
        </>
      ) : (
        <>
          <Button
            // disabled={valueTarget != null}
            onClick={() => handleTargetPress(MetricTarget.m)}
          >
            Meters
          </Button>
          <Button
            // disabled={valueTarget != null}
            onClick={() => handleTargetPress(MetricTarget.cm)}
          >
            Centi
          </Button>
          <Button
            // disabled={valueTarget != null}
            onClick={() => handleTargetPress(MetricTarget.mm)}
          >
            Milli
          </Button>
        </>
      )}
    </div>
  );
};
