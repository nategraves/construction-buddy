import { Mode } from '~/types';

export const modeSymbolMap: Record<Mode, string> = {
  [Mode.add]: '+',
  [Mode.divide]: '/',
  [Mode.equals]: '=',
  [Mode.multiply]: 'x',
  [Mode.subtract]: '-',
  [Mode.square]: '²',
  [Mode.squareRoot]: '√',
};

export function getMode(mode: Mode): string {
  return modeSymbolMap[mode];
}
