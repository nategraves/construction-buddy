import { useContext } from "react";

import { ValueContext } from "../contexts";
import { Units } from "../types";

export function useIsMetric(): boolean {
  const { units } = useContext(ValueContext);
  return units === Units.metric;
}
