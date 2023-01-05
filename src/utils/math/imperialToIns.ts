import { number } from "mathjs";

import { ImperialValue } from "../../data";

export const imperialToIns = ({ ft, ins, fr }: ImperialValue) => {
  let inches = 0;
  if (ft > 0) {
    inches += ft * 12;
  }
  if (ins > 0) {
    inches += ins;
  }
  if (fr) {
    inches += number(fr);
  }
  return inches;
};
