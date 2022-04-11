type AdjustPrecisionFunction = (
  stringInt: string,
  fractionIndex: number,
  precision: PrecisionControl,
) => {
  stringInt: string;
  fractionIndex: number;
};
