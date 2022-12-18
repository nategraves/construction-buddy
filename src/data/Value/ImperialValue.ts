import { ImperialTarget } from "../../types/ImperialTarget";

export type ImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.n]?: number;
  [ImperialTarget.d]?: number;
};
