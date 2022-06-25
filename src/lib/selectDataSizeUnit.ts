import {
  DataSizeUnit,
  DataSizeUnitSection,
  SelectDataSizeUnitFunction,
  SelectDataSizeUnitOptions,
} from '../types';

import {
  CONVERSION_TABLE,
  UNITS,
  UNIT_SECTIONS,
  UNIT_SECTION_LENGTH,
} from '../consts';

import { findClosestDataSizeUnit } from '.';

export const selectDataSizeUnit: SelectDataSizeUnitFunction = (
  valueInBits: bigint,
  fromUnit: DataSizeUnit,
  {
    conversionTable = CONVERSION_TABLE,
    toUnit,
    units = UNITS,
    unitSections = UNIT_SECTIONS,
    unitSectionLength = UNIT_SECTION_LENGTH,
  }: SelectDataSizeUnitOptions = {},
) => {
  const toUnitIndex = units.indexOf(toUnit as DataSizeUnit);

  if (toUnitIndex >= 0) {
    return units[toUnitIndex];
  }

  return findClosestDataSizeUnit(
    valueInBits,
    fromUnit,
    toUnit as DataSizeUnitSection,
    conversionTable,
    units,
    unitSections,
    unitSectionLength,
  );
};
