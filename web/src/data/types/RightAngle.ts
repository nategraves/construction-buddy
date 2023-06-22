import { Value } from './Value';

export type RightAngle = {
  rise: Value | undefined;
  run: Value | undefined;
  diagonal: Value | undefined;
};

export const EmptyRightAngle = {
  rise: undefined,
  run: undefined,
  diagonal: undefined,
};
