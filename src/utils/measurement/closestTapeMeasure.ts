import { fraction, Fraction, number } from "mathjs";
import { Resolution } from "../../types";

export const closestTapeMeasure = ({
  decimal,
  resolution = Resolution.sixteenth,
}: {
  decimal: number;
  resolution?: Resolution;
}): Fraction => {
  return fraction(
    Math.round(resolution * number(fraction(decimal))),
    resolution
  );
};
