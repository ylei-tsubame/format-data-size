import { UNIT_SECTION_LENGTH, UNITS } from '../consts';

export const createConversionTable: CreateConversionTableFunction = ({
  units = UNITS,
  existingTable = {},
  unitSectionLength = UNIT_SECTION_LENGTH,
}: CreateConversionTableOptions = {}) => {
  const bit = units[units.length - 1];
  const byte = units[units.length - 2];
  const bitsInByte = 8n;

  for (let targetIndex = 0; targetIndex < units.length - 2; targetIndex += 1) {
    const targetUnit = units[targetIndex];
    const convertKey = `${bit}-${targetUnit}`;
    const isTargetBinary = targetUnit[1] === 'i';
    const isTargetByte = targetUnit.match(/B$/) !== null;
    const exponent = (targetIndex % unitSectionLength) + 1;

    const base = isTargetBinary ? 1024n : 1000n;

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

  console.dir(existingTable, { depth: null });

  return existingTable;
};
