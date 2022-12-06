import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";
import { isImperial, isMetric } from "../../../utils/types";
import { addToImperial } from "../../../utils/math/addToImperial";
import { ImperialValue, MetricValue } from "../../../types";

export function Add() {
  const { setTotal, setStored, stored, total } = useContext(ValueContext);

  const onAdd = () => {
    if (total == null) {
      setTotal(stored);
      setStored(null);
    } else {
      if (typeof total === "number" && typeof stored === "number") {
        setTotal(stored + total);
        setStored(null);
      } else if (isImperial(total)) {
        setTotal(
          addToImperial({
            value: total,
            toAdd: stored as ImperialValue | MetricValue,
          })
        );
        setStored(null);
      } else {
        setStored(null);
      }
    }
  };

  return <Button onClick={() => onAdd()}>+</Button>;
}
