export const charToInt = (stringInt: string, charIndex: number) => {
  const digit = parseInt(stringInt.charAt(charIndex), 10);

  return digit ? digit : 0;
};
