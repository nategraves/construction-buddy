import { Value } from 'src/data';
import { createMachine } from 'xstate';

export const modeMachine = createMachine({
  schema: {
    context: {} as {
      displayValue: Value | undefined;
      error: string | undefined;
      input: number | undefined;
      inputString: string | undefined;
      totalValue: Value | undefined;
      workingValue: Value | undefined;
    },
    events: {} as
      | {
          type: 'ADD';
        }
      | {
          type: 'SUBTRACT';
        }
      | {
          type: 'MULTIPLY';
        }
      | {
          type: 'DIVIDE';
        }
      | {
          type: 'EQUALS';
        }
      | {
          type: 'INPUT';
          value: number;
        },
  },
});

// id: "mode",
// tsTypes: {} as import("./index.typegen").Typegen0,
// initial: "inputting",
// states: {
//   inputting: {
//     on: {
//       ADD: {
//         target: "adding",
//         cond: (context, event) => {
//           return event.value !== "+";
//         },
//       },
//       // SUBTRACT: { target: "subtracting" },
//       // MULTIPLY: { target: "multiplying" },
//       // SQUARE: { target: "squaring" },
//       // ROOT: { target: "rooting" },
//       // DIVIDE: { target: "dividing" },
//       // EQUALS: { target: "inputting" },
//     },
//   },
//   adding: {
//     on: {
//       INPUT: { target: "inputting" },
//       EQUALS: { target: "inputting" },
//     },
//   },
//   substracting: {
//     on: {
//       // EQUALS,
//     },
//   },
// },
