import { MetricTarget } from "./MetricTarget";

export type MetricValue = {
  [MetricTarget.m]?: number;
  [MetricTarget.cm]?: number;
  [MetricTarget.mm]?: number;
};

export const add = (v0: MetricValue, v1: MetricValue) => {
  const mm = v0.mm ?? 0 + v1.mm ?? 0;
  const cm = v0.cm ?? 0 + v1.cm ?? 0;
  const m = v0.m ?? 0 + v1.m ?? 0;

  return {
    mm,
    cm,
    m,
  };
};

export const subtract = (v0: MetricValue, v1: MetricValue) => {
  const mm = v0.mm ?? 0 - v1.mm ?? 0;
  const cm = v0.cm ?? 0 - v1.cm ?? 0;
  const m = v0.m ?? 0 - v1.m ?? 0;

  return {
    mm,
    cm,
    m,
  };
};

export const multiply = (v0: MetricValue, v1: MetricValue) => {
  const mm = v0.mm ?? 0 * v1.mm ?? 0;
  const cm = v0.cm ?? 0 * v1.cm ?? 0;
  const m = v0.m ?? 0 * v1.m ?? 0;

  return {
    mm,
    cm,
    m,
  };
};

export const divide = (v0: MetricValue, v1: MetricValue) => {
  const mm = v0.mm ?? 0 / v1.mm ?? 0;
  const cm = v0.cm ?? 0 / v1.cm ?? 0;
  const m = v0.m ?? 0 / v1.m ?? 0;

  return {
    mm,
    cm,
    m,
  };
};

export const square = (v0: MetricValue) => {
  return multiply(v0, v0);
};
