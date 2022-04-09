import { babel } from '@rollup/plugin-babel';

const createConfig = (babelEnvName, format, name = 'formatDataSize') => ({
  input: 'src/index.ts',
  output: { dir: `dist/${babelEnvName}-${format}`, format, name },
  plugins: [babel({ envName: babelEnvName, extensions: ['.ts'] })],
});

export default [
  createConfig('browser', 'esm'),
  createConfig('browser', 'umd'),
  createConfig('nodejs', 'esm'),
  createConfig('nodejs', 'cjs'),
];
