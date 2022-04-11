type RoundOptions = { precision?: number };

type RoundFunction = (
  stringInt: string,
  fractionIndex: number,
  options?: RoundOptions,
) => {
  stringInt: string;
  fractionIndex: number;
};
