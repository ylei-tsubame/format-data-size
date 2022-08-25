import { BigFloat } from './BigFloat';

export type RoundOptions = { toPrecision?: number };

export type RoundFunction = (
  value: BigFloat,
  options?: RoundOptions,
) => BigFloat;
