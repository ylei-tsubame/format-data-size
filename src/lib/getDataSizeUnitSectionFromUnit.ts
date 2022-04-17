import { DataSizeUnit, DataSizeUnitSection } from '../types';

export const getDataSizeUnitSectionFromUnit = (
  unit: DataSizeUnit,
  unitSections: Readonly<DataSizeUnitSection[]>,
) => {
  const isBinary = unit[1] === 'i';
  const isByte = /B$/.test(unit);
  const targetSection = `${isBinary ? 'i' : ''}${isByte ? 'byte' : 'bit'}`;

  const unitSectionIndex = unitSections.findIndex(
    (section) => section === targetSection,
  );

  return {
    section: targetSection,
    index: unitSectionIndex,
  };
};
