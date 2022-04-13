import {
  DataSizeUnit,
  DataSizeUnitSection,
  SelectDataSizeUnitFunction,
  SelectDataSizeUnitOptions,
} from '../types';

import { UNITS, UNIT_SECTIONS, UNIT_SECTION_LENGTH } from '../consts';

import { conversionTable as cTable } from '../singletons';

import { findClosestDataSizeUnit } from '.';

export const selectDataSizeUnit: SelectDataSizeUnitFunction = (
  valueInBits: bigint,
  fromUnit: DataSizeUnit,
  {
    conversionTable = cTable,
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
