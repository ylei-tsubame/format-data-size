import { BigFloat } from './BigFloat';

export type TrimEndFunction = (
  value: BigFloat,
  minimumPrecision: number,
) => BigFloat;
