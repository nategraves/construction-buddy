import { ImperialTarget } from "./ImperialTarget";

export type ImperialValue = {
  [ImperialTarget.ft]: Maybe<number>;
  [ImperialTarget.ins]: Maybe<number>;
  [ImperialTarget.n]: Maybe<number>;
};
