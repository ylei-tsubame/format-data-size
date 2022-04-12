import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const createConfig = (babelEnvName, format, name = 'formatDataSize') => ({
  input: 'src/index.ts',
  output: { dir: `dist/${babelEnvName}-${format}`, format, name },
  plugins: [
    nodeResolve({
      browser: babelEnvName === 'browser',
      extensions: ['.ts'],
    }),
    babel({ envName: babelEnvName, extensions: ['.ts'] }),
  ],
});

export default [
  createConfig('browser', 'esm'),
  createConfig('browser', 'umd'),
  createConfig('nodejs', 'esm'),
  createConfig('nodejs', 'cjs'),
];
