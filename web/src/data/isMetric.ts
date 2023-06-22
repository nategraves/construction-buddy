import { MetricValue } from './types/MetricValue';
import { Value } from './types/Value';

export function isMetric(value: Value | string | undefined): value is MetricValue {
  if (value == null || typeof value === 'number' || typeof value === 'string') {
    return false;
  }

  return 'm' in value || 'cm' in value || 'mm' in value;
}
