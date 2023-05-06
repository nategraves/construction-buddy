import { Value } from '~/data';
import { createMachine } from 'xstate';

export const modeMachine = createMachine({
  schema: {
    context: {} as {
      displayValue: Maybe<Value>;
      error: Maybe<string>;
      input: Maybe<number>;
      inputString: Maybe<string>;
      totalValue: Maybe<Value>;
      workingValue: Maybe<Value>;
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
