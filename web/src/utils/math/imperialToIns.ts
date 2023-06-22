import { ImperialValue } from 'src/data';

export const imperialToIns = ({ ft, ins, fr }: ImperialValue) => {
  let inches = 0;
  if (ft != null && ft > 0) {
    inches += ft * 12;
  }
  if (ins != null && ins > 0) {
    inches += ins;
  }
  if (fr) {
    inches += fr.toDecimal();
  }
  return inches;
};
