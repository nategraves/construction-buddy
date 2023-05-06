import { Mode } from '~/types';
import { isImperial, isMetric, isNumber, isSame, modeMap, Value } from '~/data';

export const updateMode = ({
  input,
  inputString,
  mode,
  newMode,
  toProcess,
  totalValue,
  workingValue,
  addToProcess,
  setInputString,
  setMode,
  setToProcess,
  setTotalValue,
  setWorkingValue,
}: {
  input: Maybe<number>;
  inputString: Maybe<string>;
  mode: Mode;
  newMode: Mode;
  toProcess: Value[];
  totalValue: Value;
  workingValue: Value;
  addToProcess: (newValue: Value) => void;
  setInputString: (newInputString: Maybe<string>) => void;
  setMode: (newMode: Mode) => void;
  setToProcess: (newToProcess: Value[]) => void;
  setTotalValue: (newValue: Maybe<Value>) => void;
  setWorkingValue: (newValue: Maybe<Value>) => void;
}) => {
  switch (mode) {
    case Mode.add:
      if (input == null && workingValue == null && totalValue != null) {
        addToProcess(totalValue);
        setTotalValue(null);
        return;
      }

      const [firstToProcess] = toProcess;

      const shouldAddNumber =
        isNumber(input) && (firstToProcess == null || isNumber(firstToProcess));
      const shouldAddImperial =
        isImperial(workingValue) && (firstToProcess == null || isImperial(firstToProcess));
      const shouldAddMetric =
        isMetric(workingValue) && (firstToProcess == null || isMetric(firstToProcess));

      if (shouldAddNumber) {
        addToProcess(input);
        setInputString(null);
        return;
      }

      if (shouldAddImperial || shouldAddMetric) {
        addToProcess(workingValue);
        setWorkingValue(null);
      }

      break;
    case Mode.divide:
      if (input == null && workingValue == null && totalValue !== null) {
        addToProcess(totalValue);
        setTotalValue(null);
        return;
      }

      const [firstToDivide] = toProcess;

      const shouldDivideNumber =
        isNumber(input) && (firstToDivide == null || isNumber(firstToDivide));
      const shouldDivideImperial =
        isImperial(workingValue) && (firstToDivide == null || isImperial(firstToDivide));
      const shouldDivideMetric =
        isMetric(workingValue) && (firstToDivide == null || isMetric(firstToDivide));

      if (shouldDivideNumber) {
        addToProcess(input);
        setInputString(null);
        return;
      }

      if (shouldDivideImperial || shouldDivideMetric) {
        addToProcess(workingValue);
        setWorkingValue(null);
      }
      break;
    case Mode.equals:
      let process = [...toProcess];

      if (workingValue) {
        if (process.length && isSame(workingValue, process[0])) {
          process = [...process, workingValue];
        } else {
          process = [workingValue];
        }
        setWorkingValue(null);
      }

      if (!process.length) {
        throw new Error(`Unable to apply '${mode}' because toProcess is empty`);
      }

      const initial = process.shift();

      if (process.length === 0 && input == null && workingValue == null) {
        console.warn('Only 1 value in toProcess. Setting as total');
        setTotalValue(initial);
      } else if (process.length === 0 && input != null && initial != null) {
        const total = modeMap[mode]({ value: initial, toApply: input });
        setInputString(null);
        setTotalValue(total);
      } else if (toProcess.length === 0 && workingValue != null && initial != null) {
        const total = modeMap[mode]({
          value: initial,
          toApply: workingValue,
        });
        setWorkingValue(null);
        setTotalValue(total);
      } else {
        console.warn({ initial, toProcess, mode, input });
        // const total = toProcess.reduce((sum, value) => {
        //   const newSum = modeMap[mode]({ value: sum, toApply: value });
        //   return newSum;
        // }, initial);
        // setTotalValue(total);
      }

      setToProcess([]);
      break;
    case Mode.multiply:
      // If there's input and we have a working value, assume
      // that we're filling in the next empty measurement
      const fillNextMeasurement = inputString != null && workingValue != null;
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
      if (inputString == null && workingValue == null && totalValue !== null) {
        addToProcess(totalValue);
        setTotalValue(null);
        return;
      }

      const [firstToMultiply] = toProcess;

      const shouldMultiplyNumber =
        isNumber(input) && (firstToMultiply == null || isNumber(firstToMultiply));
      const shouldMultiplyImperial =
        isImperial(workingValue) && (firstToMultiply == null || isImperial(firstToMultiply));
      const shouldMultiplyMetric =
        isMetric(workingValue) && (firstToMultiply == null || isMetric(firstToMultiply));

      if (shouldMultiplyNumber) {
        addToProcess(input);
        setInputString(null);
        return;
      }

      if (shouldMultiplyImperial || shouldMultiplyMetric) {
        addToProcess(workingValue);
        setWorkingValue(null);
      }
      break;

    default:
      console.log({ newMode });
      break;
  }
  setMode(newMode);
};
