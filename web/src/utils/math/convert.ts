// import { Fraction, ImperialTarget, isMetric, isNumber, MetricTarget, Value } from 'src/data';

// const conversions = {
//   [MetricTarget.m]: 3.28, // To feet
//   [MetricTarget.cm]: 0.39, // To inches
//   [MetricTarget.mm]: 0.039, // To inches
//   [ImperialTarget.ft]: 0.3, // To meters
//   [ImperialTarget.ins]: 2.54, // To cm/mm
// };

// export const convert = (value: Value, resolution: number): Value => {
//   if (isNumber(value)) {
//     return value;
//   }
//   if (isMetric(value)) {
//     const ft = (value.m ?? 0) * conversions[MetricTarget.m];
//     const ins =
//       (value.cm ?? 0) * conversions[MetricTarget.cm] +
//       (value.mm ?? 0) * conversions[MetricTarget.mm];
//     const fr = ins ? Fraction.fromDecimal(ins % 1) : undefined;
//     return {
//       ft,
//       ins,
//       fr,
//     };
//   }

//   return {
//     m: (value.ft ?? 0) * conversions[ImperialTarget.ft],
//     cm: (value.ins ?? 0) * conversions[ImperialTarget.ins],
//     mm: (value.fr?.toDecimal() ?? 0) * conversions[ImperialTarget.ins],
//   };
// };
