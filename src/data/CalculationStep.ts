import { Value } from './Value';

export type CalculationStep = {
  value: Value;
  prescript?: string;
  postscript?: string;
  operation?: string;
  total: Value;
};
