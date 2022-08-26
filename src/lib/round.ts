import { BigFloat, RoundFunction, RoundOptions } from '../types';

import { p10n } from './p10n';

export const round: RoundFunction = (
  { precision, value }: BigFloat,
  { toPrecision = 0 }: RoundOptions = {},
) => {
  const result: BigFloat = { precision: toPrecision, value };

  if (toPrecision > precision) {
    result.value *= p10n(toPrecision - precision);
  } else if (toPrecision < precision) {
    const diff = precision - toPrecision;
    const mask = p10n(diff);
    const last = (result.value % mask) / p10n(diff - 1);

    result.value /= mask;

    if (last > 4) {
      result.value += 1n;
    }
  }

  return result;
};
