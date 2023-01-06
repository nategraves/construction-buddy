import { Value } from "../data";

export type RightAngle = {
  rise: Maybe<Value>;
  run: Maybe<Value>;
  diagonal: Maybe<Value>;
};

export const EmptyRightAngle = {
  rise: undefined,
  run: undefined,
  diagonal: undefined,
};
