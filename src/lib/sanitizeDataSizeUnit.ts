import { DataSizeUnit } from '../types';

import { UNITS } from '../consts';

export const sanitizeDataSizeUnit = (
  unit: DataSizeUnit,
  fallbackUnit: DataSizeUnit,
  units: Readonly<DataSizeUnit[]> = UNITS,
): {
  unit: DataSizeUnit;
  unitIndex: number;
} => {
  const unitIndex = units.indexOf(unit);

  return unitIndex < 0
    ? { unit: fallbackUnit, unitIndex: 0 }
    : { unit: units[unitIndex], unitIndex };
};
