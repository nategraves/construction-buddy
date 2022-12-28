import { Mode } from "../../types";
import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";
import { Value } from "./Value";

export const modeMap: Record<
  Partial<Mode>,
  (params: { value: Value; toApply: Value }) => Value
> = {
  [Mode.add]: ({ value, toApply }) => add({ value, toApply }),
  [Mode.divide]: ({ value, toApply }) => divide({ value, toApply }),
  [Mode.multiply]: ({ value, toApply }) => multiply({ value, toApply }),
  [Mode.subtract]: ({ value, toApply }) => subtract({ value, toApply }),
  [Mode.equals]: () => {
    throw new Error("Unimplemented");
  },
  [Mode.square]: () => {
    throw new Error("Unimplemented");
  },
  [Mode.pitch]: () => {
    throw new Error("Unimplemented");
  },
};
