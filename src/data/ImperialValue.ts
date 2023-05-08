import { Fraction } from 'mathjs';
import { ImperialTarget } from './ImperialTarget';

export type ImperialValue = {
  [ImperialTarget.ft]?: number;
  [ImperialTarget.ins]?: number;
  [ImperialTarget.fr]?: Fraction;
};
