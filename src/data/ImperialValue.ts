import { ImperialTarget } from './ImperialTarget';
import { Fraction } from './Fraction';

export type ImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.fr]?: Fraction;
  prescript?: string;
  postscript?: string;
};
