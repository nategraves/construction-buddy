const DEFAULT_DECIMAL_PLACES = 3;
export function truncateNumber(
  number: number,
  decimalPlaces: number = DEFAULT_DECIMAL_PLACES,
): number {
  if (Number.isInteger(number)) {
    return number;
  } else {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.floor(number * multiplier) / multiplier;
  }
}
