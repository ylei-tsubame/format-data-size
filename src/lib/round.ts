const round: RoundFunction = (
  stringInt: string,
  postDecimalIndex: number,
  { precision = 1 }: RoundOptions = {},
) => {
  const precisionIndex = precision - 1;
  const maxLastDigitIndex = stringInt.length - 2;
  const preDecimalIndex = postDecimalIndex - 1;

  let lastDigitIndex = postDecimalIndex + precisionIndex;

  if (lastDigitIndex > maxLastDigitIndex) {
    lastDigitIndex = maxLastDigitIndex;
  } else if (lastDigitIndex < preDecimalIndex) {
    lastDigitIndex = preDecimalIndex;
  }

  const lastDigit =
    parseInt(stringInt.charAt(lastDigitIndex), 10) +
    (parseInt(stringInt.charAt(lastDigitIndex + 1), 10) > 4 ? 1 : 0);

  return `${stringInt.substring(0, lastDigitIndex)}${lastDigit}`;
};

export default round;
