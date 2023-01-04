import { Mode } from "../../types";
import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { square } from "./square";
import { squareRoot } from "./squareRoot";
import { subtract } from "./subtract";
import { Value } from "./Value";

type ModeMapEntry = {
  [key in Mode]: (params: { value: Value; toApply?: Value }) => Maybe<Value>;
};

export const modeMap: ModeMapEntry = {
  [Mode.add]: ({ value, toApply }) => add({ value, toApply }),
  [Mode.divide]: ({ value, toApply }) => divide({ value, toApply }),
  [Mode.multiply]: ({ value, toApply }) => multiply({ value, toApply }),
  [Mode.square]: ({ value }) => square({ value }),
  [Mode.squareRoot]: ({ value }) => squareRoot({ value }),
  [Mode.subtract]: ({ value, toApply }) => subtract({ value, toApply }),
  [Mode.equals]: (_) => null,
};
