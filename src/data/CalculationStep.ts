import { Value } from './Value';

export type CalculationStep = {
  value: Value;
  prescript?: string;
  postscript?: string;
  operator?: string;
  total: Value;
};
