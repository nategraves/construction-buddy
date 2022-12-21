import { Fraction } from "mathjs";
import { ImperialTarget } from "../../types/ImperialTarget";

export type ImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.fr]?: Fraction;
};
