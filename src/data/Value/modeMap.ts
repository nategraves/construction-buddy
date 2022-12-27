import { Mode } from "../../types";
import { add } from "./add";
import { divide } from "./divide";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

export const modeMap: Record<Partial<Mode>, (params: unknown) => void> = {
  [Mode.add]: add,
  [Mode.divide]: divide,
  [Mode.multiply]: multiply,
  [Mode.subtract]: subtract,
  [Mode.equals]: () => {},
  [Mode.square]: () => {},
  [Mode.pitch]: () => {},
};
