import React, { useContext } from 'react';

import { Button } from 'src/ui';
import { ValueContext } from 'src/contexts';
import { OperationSymbols, operationsMap } from 'src/data';

export function Percent() {
  const { calculationSteps, input, addCalculationStep, setInputString } = useContext(ValueContext);

  const handleClick = () => {
    if (input == null) {
      // TODO: handle this
      return;
    }
    const pct = input / 100;

    if (calculationSteps.length === 0) {
      addCalculationStep({
        value: pct,
        total: pct,
      });

      setInputString();
      return;
    }

    const lastStep = calculationSteps[calculationSteps.length - 1];

    if (lastStep.operator == null) {
      // TODO: handle this
      return;
    }

    const lastOperator = lastStep.operator;

    if (lastOperator == null) {
      // TODO: handle this
      return;
    }

    const lastOperatorAction = operationsMap[lastOperator as OperationSymbols];

    const total = lastOperatorAction({
      value: lastStep.total,
      toApply: pct,
    });

    addCalculationStep({
      value: input,
      postscript: '\u0025',
      total,
    });

    setInputString();
  };

  return <Button onClick={() => handleClick()}>%</Button>;
}
