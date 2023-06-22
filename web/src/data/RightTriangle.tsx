import React from 'react';

import { add, flatten, isImperial, isMetric, multiply, unflatten, Units, Value } from 'src/data';

export class RightTriangle {
  rise?: Value;
  run?: Value;
  diagonal?: Value;
  pitch?: Value;

  constructor({ rise, run, diagonal, pitch }: RightTriangle) {
    this.rise = rise;
    this.run = run;
    this.diagonal = diagonal;
    this.pitch = pitch;
  }

  addRise(value: Value) {
    const { run } = this;
    this.rise = value;
    if (run != null) {
      this.calculateDiagonal();
    }
  }

  calculateDiagonal() {
    const { rise, run } = this;

    if (rise == null || run == null) {
      return;
    }

    let units;

    if (isImperial(rise)) {
      units = Units.imperial;
    }

    if (isMetric(rise)) {
      units = Units.metric;
    }

    const riseSquared = multiply({ value: rise, toApply: rise! });
    const runSquared = multiply({ value: run, toApply: run });
    const diagonalSquared = add({ value: riseSquared, toApply: runSquared });
    const diagonalSquaredFlat = flatten(diagonalSquared);
    const diagonal = Math.sqrt(diagonalSquaredFlat);
    this.diagonal = units ? unflatten({ value: diagonal, units }) : diagonal;
  }

  calculateRise() {
    const { diagonal, run } = this;

    if (diagonal == null || run == null) {
      return;
    }

    let units;

    if (isImperial(run)) {
      units = Units.imperial;
    }

    if (isMetric(run)) {
      units = Units.metric;
    }

    const diagonalSquared = multiply({ value: diagonal, toApply: diagonal });
    const runSquared = multiply({ value: run, toApply: run });
    const riseSquared = add({ value: diagonalSquared, toApply: runSquared });
    const riseSquaredFlat = flatten(riseSquared);
    const rise = Math.sqrt(riseSquaredFlat);
    this.rise = units ? unflatten({ value: rise, units }) : rise;
    this.rise = rise;
  }

  calculateRun() {
    const { diagonal, rise } = this;

    if (diagonal == null || rise == null) {
      return;
    }

    let units;

    if (isImperial(rise)) {
      units = Units.imperial;
    }

    if (isMetric(rise)) {
      units = Units.metric;
    }

    const diagonalSquared = multiply({ value: diagonal, toApply: diagonal });
    const riseSquared = multiply({ value: rise, toApply: rise });
    const runSquared = add({ value: diagonalSquared, toApply: riseSquared });
    const runSquaredFlat = flatten(runSquared);
    const run = Math.sqrt(runSquaredFlat);
    this.run = units ? unflatten({ value: run, units }) : run;
  }

  toComponent() {
    return <span>Right Angle</span>;
  }
}
