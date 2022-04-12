export type RoundOptions = { precision?: number };

export type RoundFunction = (
  stringInt: string,
  fractionIndex: number,
  options?: RoundOptions,
) => {
  stringInt: string;
  fractionIndex: number;
};
