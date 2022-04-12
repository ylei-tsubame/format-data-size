import { UNIT_SECTION_LENGTH, UNITS } from '../consts';

import { power } from '.';

export const createConversionTable: CreateConversionTableFunction = ({
  units = UNITS,
  existingTable = {},
  unitSectionLength = UNIT_SECTION_LENGTH,
}: CreateConversionTableOptions = {}) => {
  const bit: Extract<DataSizeUnit, 'b'> = 'b';
  const bitsInByte = 8n;

  for (let targetIndex = 0; targetIndex < units.length; targetIndex += 1) {
    const targetUnit = units[targetIndex];

    if (bit === targetUnit) {
      continue;
    }

    const convertKey = `${bit}-${targetUnit}`;
    const isTargetBinary = targetUnit[1] === 'i';
    const isTargetByte = /B$/.test(targetUnit);
    const exponent = targetIndex % unitSectionLength;

    const base = isTargetBinary ? 1024n : 1000n;

    let multiplier: bigint = power(base, exponent);

    if (isTargetByte) {
      multiplier *= bitsInByte;
    }

    existingTable[convertKey] = multiplier;
  }

  return existingTable;
};
