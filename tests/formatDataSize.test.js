import { formatDataSize } from '../src';

describe(`${typeof formatDataSize}: ${formatDataSize.name}`, () => {
  it('converts bytes to bits correctly', () => {
    expect.assertions(1);

    expect(formatDataSize(1024, { toUnit: 'b' })).toStrictEqual({
      value: '8192.00',
      unit: 'b',
    });
  });
});
