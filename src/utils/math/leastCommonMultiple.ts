export const leastCommonMultiple = (v0: number, v1: number) => {
  function range(min: number, max: number) {
    const arr = [];
    for (let i = min; i <= max; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(v0: number, v1: number) {
    return !v1 ? v0 : gcd(v1, v0 % v1);
  }

  function lcm(v0: number, v1: number) {
    return (v0 * v1) / gcd(v0, v1);
  }

  let multiple = v0;
  range(v0, v1).forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
};
