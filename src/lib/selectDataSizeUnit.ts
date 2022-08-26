import {
  BigFloat,
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

import { findClosestDataSizeUnit } from './findClosestDataSizeUnit';
import { p10n } from './p10n';

export const selectDataSizeUnit: SelectDataSizeUnitFunction = (
  { precision, value }: BigFloat,
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
    value / p10n(precision),
    fromUnit,
    toUnit as DataSizeUnitSection,
    conversionTable,
    units,
    unitSections,
    unitSectionLength,
  );
};
