import { Units } from './Units';
import { Value } from './Value';

export const reduceSquared = (value: number, units?: Units): Value => {
  let result;
  switch (units) {
    case Units.imperial:
      result = {
        ft: value / 144,
      };
      break;

    case Units.metric:
      result = {
        m: value / 10000,
      };
      break;
    default:
      result = value;
  }

  return result;
};
