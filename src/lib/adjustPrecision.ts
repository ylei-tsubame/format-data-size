import { AdjustPrecisionFunction, PrecisionControl } from '../types';

import { round } from '.';

export const adjustPrecision: AdjustPrecisionFunction = (
  stringInt: string,
  fractionIndex: number,
  precision: PrecisionControl,
) => {
  const fractionLength = stringInt.length - fractionIndex;

  let newStringInt: string = stringInt;
  let newFractionIndex: number = fractionIndex;
  let max: number;
  let min: number;

  if (typeof precision === 'number') {
    max = precision;
    min = precision;
  } else {
    ({ max = fractionLength, min = 0 } = precision);
  }

  if (fractionLength < min) {
    newStringInt = stringInt.padEnd(fractionIndex + min, '0');
  } else if (fractionLength > max) {
    ({ stringInt: newStringInt, fractionIndex: newFractionIndex } = round(
      stringInt,
      fractionIndex,
      {
        precision: max,
      },
    ));
  }

  return {
    stringInt: newStringInt,
    fractionIndex: newFractionIndex,
  };
};
