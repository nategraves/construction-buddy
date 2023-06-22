import { Value } from './Value';
import { add } from '../add';
import { divide } from '../divide';
import { multiply } from '../multiply';
import { subtract } from '../subtract';
import { Symbols } from '../Symbols';

export type OperationSymbols = Symbols.add | Symbols.subtract | Symbols.multiply | Symbols.divide;

export type OperationFunction = ({ value, toApply }: { value: Value; toApply: Value }) => Value;

export const operationsMap = {
  [Symbols.add]: add,
  [Symbols.subtract]: subtract,
  [Symbols.multiply]: multiply,
  [Symbols.divide]: divide,
} satisfies Record<OperationSymbols, OperationFunction>;
