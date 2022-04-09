import { UNIT_SECTION_LENGTH, UNITS } from '../consts';

const createConversionTable: CreateConversionTableFunction = ({
  units = UNITS,
  existingTable = {},
}: CreateConversionTableOptions = {}) => {
  const bit = units[units.length - 1];
  const byte = units[units.length - 2];
  const bitsInByte = BigInt(8);

  for (let targetIndex = 0; targetIndex < units.length - 2; targetIndex += 1) {
    const targetUnit = units[targetIndex];
    const convertKey = `${bit}-${targetUnit}`;
    const isTargetBinary = targetUnit[1] === 'i';
    const isTargetByte = targetUnit.match(/B$/) !== null;
    const exponent = (targetIndex % UNIT_SECTION_LENGTH) + 1;

    const base = BigInt(isTargetBinary ? 1024 : 1000);

    let multiplier: bigint = base;

    for (let c = 1; c < exponent; c += 1) {
      multiplier *= base;
    }

    if (isTargetByte) {
      multiplier *= bitsInByte;
    }

    existingTable[convertKey] = multiplier;
  }

  existingTable[`${bit}-${byte}`] = bitsInByte;

  return existingTable;
};

export default createConversionTable;
