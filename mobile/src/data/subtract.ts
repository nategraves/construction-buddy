import { flatten, isImperial, isMetric, isNumber, unflatten, Units, Value } from './index';

export const subtract = ({ value, toApply }: { value: Value; toApply: Value }) => {
  if (isMetric(value) && isMetric(toApply)) {
    const m = (value.m ?? 0) - (toApply.m ?? 0);
    const cm = (value.cm ?? 0) - (toApply.cm ?? 0);
    const mm = (value.mm ?? 0) - (toApply.mm ?? 0);

    return {
      m,
      cm,
      mm,
    };
  }
  if (isImperial(value) && isImperial(toApply)) {
    const flatValue = flatten(value);
    const flatToApply = flatten(toApply);
    const total = flatValue - flatToApply;
    const includeFt = 'ft' in value || 'ft' in toApply;
    return unflatten({ value: total, units: Units.imperial, includeFt });
  }

  if (isNumber(value) && isNumber(toApply)) {
    return value - toApply;
  }

  throw new Error('Cannot subtract values of different types');
};
