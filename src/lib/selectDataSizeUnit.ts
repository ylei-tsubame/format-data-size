import {
  DataSizeUnit,
  DataSizeUnitSection,
  SelectDataSizeUnitFunction,
  SelectDataSizeUnitOptions,
} from '../types';

import { UNITS, UNIT_SECTIONS, UNIT_SECTION_LENGTH } from '../consts';

export const selectDataSizeUnit: SelectDataSizeUnitFunction = (
  stringInt: string,
  precision: number,
  fromUnit: DataSizeUnit,
  fromUnitIndex: number,
  {
    toUnit,
    units = UNITS,
    unitSections = UNIT_SECTIONS,
    unitSectionLength = UNIT_SECTION_LENGTH,
  }: SelectDataSizeUnitOptions = {},
) => {
  let newToUnit: DataSizeUnit = fromUnit;

  const toUnitIndex = units.indexOf(toUnit as DataSizeUnit);

  if (toUnitIndex >= 0) {
    newToUnit = units[toUnitIndex];

    return newToUnit;
  }

  let toUnitSectionIndex = unitSections.indexOf(toUnit as DataSizeUnitSection);

  if (toUnitSectionIndex < 0) {
    toUnitSectionIndex = /B$/.test(fromUnit)
      ? unitSections.indexOf('byte')
      : unitSections.indexOf('bit');
  }

  const integralLength = stringInt.length - precision;
  const unitLevel = fromUnitIndex % unitSectionLength;
  const levelOffset = Math.floor((integralLength - precision) / 3);
  const indexInSection = Math.max(
    0,
    Math.min(unitLevel + levelOffset, unitSectionLength - 1),
  );

  return units[toUnitSectionIndex * unitSectionLength + indexInSection];
};
