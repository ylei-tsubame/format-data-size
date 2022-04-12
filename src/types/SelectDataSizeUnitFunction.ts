import { DataSizeUnit, DataSizeUnitSection, TargetDataSizeUnit } from '.';

export type SelectDataSizeUnitOptions = {
  toUnit?: TargetDataSizeUnit;
  units?: Readonly<DataSizeUnit[]>;
  unitSections?: Readonly<DataSizeUnitSection[]>;
  unitSectionLength?: Readonly<number>;
};

export type SelectDataSizeUnitFunction = (
  stringInt: string,
  postDecimalIndex: number,
  fromUnit: DataSizeUnit,
  fromUnitIndex: number,
  options?: SelectDataSizeUnitOptions,
) => DataSizeUnit;
