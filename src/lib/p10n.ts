import { P10NFunction } from '../types';

export const p10n: P10NFunction = (exponent) => BigInt(10 ** exponent);
