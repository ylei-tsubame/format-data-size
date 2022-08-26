import { BigFloat, TrimEndFunction } from '../types';

export const trimEnd: TrimEndFunction = ({ precision, value }, pMin) => {
  const result: BigFloat = { precision, value };
  const limit = precision - pMin;

  let isZero = true;

  for (let i = 1; isZero && i <= limit; i += 1) {
    const last = result.value % 10n;

    if (last === 0n) {
      result.value /= 10n;
      result.precision -= 1;
    } else {
      isZero = false;
    }
  }

  return result;
};
