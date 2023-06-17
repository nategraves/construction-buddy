import { Symbols } from '../Symbols';
import { OperationSymbols } from '../types/Operations';
import { ActionProps } from './actionType';
import { addAction } from './addAction';
import { divideAction } from './divideAction';
import { multiplyAction } from './multiplyAction';
import { subtractAction } from './subtractAction';

export type ActionFunction = (props: ActionProps) => void;

export const actionMap = {
  [Symbols.add]: addAction,
  [Symbols.subtract]: subtractAction,
  [Symbols.multiply]: multiplyAction,
  [Symbols.divide]: divideAction,
} satisfies Record<OperationSymbols, ActionFunction>;
