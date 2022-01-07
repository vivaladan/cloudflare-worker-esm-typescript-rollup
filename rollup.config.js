import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

export default {
    input: 'src/worker.ts',
    output: {
        exports: 'named',
        format: 'es',
        file: 'dist/worker.mjs',
        sourcemap: true,
    },
    plugins: [typescript(), commonjs(), nodeResolve({ browser: true }), terser(), json()]
};