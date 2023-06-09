import { Value } from './Value';

export type CalculationStep = {
  operation?: string;
  totalPrescript?: string;
  totalPostscript?: string;
  total: Value;
  value: Value;
  valuePostscript?: string;
  valuePrescript?: string;
};
