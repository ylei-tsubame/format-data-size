// A warpper to [c]reate [t]est [f]unctions.
export const ctf =
  (testFunction, assertionCount = 1) =>
  (...args) => {
    expect.assertions(assertionCount);

    testFunction(...args);
  };
