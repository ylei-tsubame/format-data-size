import { PrecisionControl } from '.';

export type AdjustPrecisionFunction = (
  stringInt: string,
  fractionIndex: number,
  precision: PrecisionControl,
) => {
  stringInt: string;
  fractionIndex: number;
};
