type SelectDataSizeUnitOptions = {
  toUnit?: TargetDataSizeUnit;
  units?: DataSizeUnit[];
  unitSections?: UnitSection[];
  unitSectionLength?: number;
};

type SelectDataSizeUnitFunction = (
  stringInt: string,
  postDecimalIndex: number,
  fromUnit: DataSizeUnit,
  fromUnitIndex: number,
  options?: SelectDataSizeUnitOptions,
) => DataSizeUnit;
