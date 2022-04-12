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

  let toUnitSectionIndex = unitSections.indexOf(toUnit as UnitSection);

  if (toUnitSectionIndex < 0) {
    toUnitSectionIndex = /B$/.test(fromUnit)
      ? unitSections.indexOf('byte')
      : unitSections.indexOf('bit');
  }

  const integralLength = stringInt.length - precision;

  console.log(
    `stringInt=${stringInt},integralLength=${integralLength},precision=${precision}`,
  );

  const indexInSection =
    (fromUnitIndex % unitSectionLength) +
    Math.floor((integralLength - precision) / 3);

  return units[toUnitSectionIndex * unitSectionLength + indexInSection];
};
