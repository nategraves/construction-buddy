import { isImperial } from '../isImperial';
import { isMetric } from '../isMetric';

import { ActionProps } from './actionType';

type FillMeasurementProps = Pick<ActionProps, 'input' | 'setWorkingValue' | 'workingValue'>;

export const fillMeasurement = ({ input, setWorkingValue, workingValue }: FillMeasurementProps) => {
  // If there's input and we have a working value, assume
  // that we're filling in the next empty measurement
  const fillNextMeasurement = input != null && workingValue != null;
  const fillInches =
    fillNextMeasurement &&
    isImperial(workingValue) &&
    workingValue.ft != null &&
    workingValue.ins == null;
  const fillCm =
    fillNextMeasurement &&
    isMetric(workingValue) &&
    workingValue.m != null &&
    workingValue.cm == null;
  const fillMm =
    fillNextMeasurement &&
    isMetric(workingValue) &&
    workingValue.m != null &&
    workingValue.cm != null &&
    workingValue.mm == null;

  if (fillInches) {
    setWorkingValue({ ...workingValue, ...(input ? { ins: input } : {}) });
  } else if (fillCm) {
    setWorkingValue({ ...workingValue, ...(input ? { cm: input } : {}) });
  } else if (fillMm) {
    setWorkingValue({ ...workingValue, ...(input ? { mm: input } : {}) });
  }
};
