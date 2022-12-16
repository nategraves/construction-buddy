import { ImperialTarget } from "./ImperialTarget";

export type ImperialValueState = {
  [ImperialTarget.ft]: Maybe<number>;
  [ImperialTarget.ins]: Maybe<number>;
  [ImperialTarget.n]: Maybe<number>;
};

export class ImperialValue {
  ft: Maybe<number>;
  ins: Maybe<number>;
  n: Maybe<number>;

  constructor({ ft, ins, n }: ImperialValueState) {
    this.ft = ft;
    this.ins = ins;
    this.n = n;
  }

  toString() {
    const measurement = [
      this.ft ? `${this.ft}` : "",
      this.ins ? `${this.ft}` : "",
      this.n ? `${this.n}` : "",
    ];
    return measurement.join("-");
  }

  add(value: ImperialValue) {
    this.ft = this.ft ?? 0 + value.ft ?? 0;
    this.ins = this.ins ?? 0 + value.ins ?? 0;
    this.n = this.n ?? 0 + value.n ?? 0;
  }

  subtract(value: ImperialValue) {
    this.ft = this.ft ?? 0 - value.ft ?? 0;
    this.ins = this.ins ?? 0 - value.ins ?? 0;
    this.n = this.n ?? 0 - value.n ?? 0;
  }

  multiply(value: ImperialValue) {
    this.ft = this.ft ?? 0 * value.ft ?? 0;
    this.ins = this.ins ?? 0 * value.ins ?? 0;
    this.n = this.n ?? 0 * value.n ?? 0;
  }

  divide(value: ImperialValue) {
    this.ft = this.ft ?? 0 / value.ft ?? 0;
    this.ins = this.ins ?? 0 / value.ins ?? 0;
    this.n = this.n ?? 0 / value.n ?? 0;
  }
}

export type TImperialValue = typeof ImperialValue;
