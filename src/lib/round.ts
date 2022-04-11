import { charToInt } from '.';

export const round: RoundFunction = (
  stringInt: string,
  fractionIndex: number,
  { precision = 0 }: RoundOptions = {},
) => {
  const lastDigitIndex = fractionIndex + precision;
  const stringValue = stringInt.padEnd(
    Math.max(lastDigitIndex, stringInt.length - 1) + 1,
    '0',
  );

  const lastDigit = charToInt(stringValue, lastDigitIndex);

  let carryOver = lastDigit > 4 ? 1 : 0;
  let digitIndex = lastDigitIndex - 1;
  let roundedPart = '';
  let newFractionIndex = fractionIndex;

  while (carryOver === 1) {
    const added = charToInt(stringValue, digitIndex) + carryOver;

    carryOver = Math.floor(added / 10);
    roundedPart = `${added % 10}${roundedPart}`;
    digitIndex -= 1;
  }

  const unchangedPart = stringValue.substring(0, digitIndex + 1);

  let newStringInt = `${unchangedPart}${roundedPart}`;

  if (newStringInt === '') {
    newStringInt = '0';
    newFractionIndex = 1;
  }

  if (digitIndex < -1) {
    newFractionIndex += 1;
  }

  return {
    stringInt: newStringInt,
    fractionIndex: newFractionIndex,
  };
};
