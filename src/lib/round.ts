import { BigFloat, RoundFunction, RoundOptions } from '../types';

export const round: RoundFunction = (
  { precision, value }: BigFloat,
  { toPrecision = 0 }: RoundOptions = {},
) => {
  const result: BigFloat = { precision: toPrecision, value };

  if (toPrecision > precision) {
    result.value *= BigInt(10 ** (toPrecision - precision));
  } else if (toPrecision < precision) {
    const diff = precision - toPrecision;
    const b = BigInt(10 ** diff);
    const last = (result.value % b) / BigInt(10 ** (diff - 1));

    result.value /= b;

    if (last > 4) {
      result.value += 1n;
    }
  }

  return result;
};
