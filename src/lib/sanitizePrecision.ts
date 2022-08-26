import { PrecisionControl, PrecisionRange } from '../types';

export const sanitizePrecision = (
  precision: PrecisionControl = {},
): PrecisionRange =>
  typeof precision === 'number'
    ? {
        max: precision,
        min: precision,
      }
    : {
        max: precision.max ?? 2,
        min: precision.min ?? 0,
      };
