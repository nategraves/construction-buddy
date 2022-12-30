import { Mode } from "../../types";
import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";
import { Value } from "./Value";

export const modeMap: Record<
  Partial<Mode>,
  ((params: { value: Value; toApply: Value }) => Value) | (() => null)
> = {
  [Mode.add]: ({ value, toApply }) => add({ value, toApply }),
  [Mode.cube]: () => undefined,
  [Mode.divide]: ({ value, toApply }) => divide({ value, toApply }),
  [Mode.equals]: () => {},
  [Mode.multiply]: ({ value, toApply }) => multiply({ value, toApply }),
  [Mode.pitch]: () => {},
  [Mode.square]: () => {},
  [Mode.subtract]: ({ value, toApply }) => subtract({ value, toApply }),
};
