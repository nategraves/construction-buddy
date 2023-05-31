import { Fraction, Resolution } from 'src/data';

export const closestTapeMeasure = ({
  decimal,
  resolution = Resolution.sixtyFourth,
}: {
  decimal: number;
  resolution?: Resolution;
}): Fraction => {
  return new Fraction(Math.round(resolution * decimal), resolution);
};
