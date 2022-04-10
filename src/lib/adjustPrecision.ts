import { round } from '.';

export const adjustPrecision: AdjustPrecisionFunction = (
  stringInt: string,
  postDecimalIndex: number,
  precision: PrecisionControl,
) => {
  const postDecimalLength = stringInt.length - postDecimalIndex;

  let result: string = stringInt;
  let max: number;
  let min: number;

  if (typeof precision === 'number') {
    max = precision;
    min = precision;
  } else {
    ({ max = postDecimalLength, min = 0 } = precision);
  }

  if (postDecimalLength < min) {
    result = stringInt.padEnd(postDecimalIndex + min, '0');
  } else if (postDecimalLength > max) {
    result = round(stringInt, postDecimalIndex, {
      precision: max,
    });
  }

  return result;
};
