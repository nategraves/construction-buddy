import { ImperialTarget } from "./ImperialTarget";

export type ImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.n]?: number;
};

export const add = (v0: ImperialValue, v1: ImperialValue): ImperialValue => {
  const n = v0.n ?? 0 + v1.n ?? 0;
  const ins = v0.ins ?? 0 + v1.ins ?? 0;
  const ft = v0.ft ?? 0 + v1.ft ?? 0;

  return {
    n,
    ins,
    ft,
  };
};

export const subtract = (
  v0: ImperialValue,
  v1: ImperialValue
): ImperialValue => {
  const n = v0.n ?? 0 - v1.n ?? 0;
  const ins = v0.ins ?? 0 - v1.ins ?? 0;
  const ft = v0.ft ?? 0 - v1.ft ?? 0;

  return {
    n,
    ins,
    ft,
  };
};

export const multiply = (
  v0: ImperialValue,
  v1: ImperialValue
): ImperialValue => {
  const n = v0.n ?? 0 * v1.n ?? 0;
  const ins = v0.ins ?? 0 * v1.ins ?? 0;
  const ft = v0.ft ?? 0 * v1.ft ?? 0;

  return {
    n,
    ft,
    ins,
  };
};

export const divide = (v0: ImperialValue, v1: ImperialValue): ImperialValue => {
  const n = v0.n ?? 0 / v1.n ?? 0;
  const ins = v0.ins ?? 0 / v1.ins ?? 0;
  const ft = v0.ft ?? 0 / v1.ft ?? 0;

  return {
    n,
    ins,
    ft,
  };
};

export const square = (v0: ImperialValue): ImperialValue => {
  return multiply(v0, v0);
};
