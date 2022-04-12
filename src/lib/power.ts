export const power = (base: bigint, exponent: number) => {
  let result = 1n;

  for (let count = 0; count < exponent; count += 1) {
    result *= base;
  }

  return result;
};
