import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import css from 'rollup-plugin-import-css';

export default {
 input: 'src/main.js',
 output: {
  file: 'assets/main.js',
  format: 'iife',
  sourcemap: true,
 },
 plugins: [
  nodeResolve(),
  css(),
  replace({
   'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  babel({
   presets: ['@babel/preset-react'],
  }),
 ],
};
