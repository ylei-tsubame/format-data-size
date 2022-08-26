import { clamp } from '../src/lib';

describe(`unit ${typeof clamp} ${clamp.name}`, () => {
  it('clamps given value to specified range', () => {
    expect.assertions(3);

    expect(clamp(2.1, 0, 10)).toBe(2.1);

    expect(clamp(3, 0, 1)).toBe(1);

    expect(clamp(-0.1, 0, 1)).toBe(0);
  });
});
