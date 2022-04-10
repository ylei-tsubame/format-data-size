const createEnv = (envName) => {
  const baseEnv = {
    presets: [
      ['@babel/preset-env', { modules: false }],
      '@babel/preset-typescript',
    ],
  };
  const presetEnvOptions = baseEnv.presets[0][1];

  if (envName === 'nodejs') {
    presetEnvOptions.targets = { node: '10.0' };
  }

  if (envName === 'development') {
    presetEnvOptions.modules = 'commonjs';
    presetEnvOptions.targets = { node: 'current' };
  }

  return baseEnv;
};

module.exports = {
  env: {
    browser: createEnv('browser'),
    nodejs: createEnv('nodejs'),
    development: createEnv('development'),
  },
};
