import { Value } from "./Value";

export function isNumber(value: Maybe<Value>): value is number {
  return typeof value === "number";
}
