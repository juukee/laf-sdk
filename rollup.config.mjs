import commonjs from "@rollup/plugin-commonjs"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import terser from '@rollup/plugin-terser'
import pkg from "./package.json" assert { type: 'json' }
console.log(`running version ${pkg.version}`);
import cleanBeforeWrite from './build-plugins/clean-before-write.js';
const outputDir = 'dist'
function createBundleConfig(sourceFile, outFile, globalName) {
  return {
    input: `./src/${sourceFile}.ts`,
    output: [
      {
        file: `./${outputDir}/${outFile}.umd.js`,
        format: "umd",
        name: globalName,
        sourcemap: true,
      },
      {
        file: `./${outputDir}/${outFile}.min.js`,
        format: "umd",
        name: globalName,
        sourcemap: true,
        plugins: [terser()],
      },
      { 
        format: 'es', 
        file: `${outputDir}/${outFile}.js`,
        sourcemap: true
      },
    ],
    plugins: [commonjs(), nodeResolve(), json(), typescript({
      include: ["src/**/*", "build-plugins/**/*"],
      declaration: true,
      outDir: outputDir 
    }), 
    cleanBeforeWrite(outputDir)
  ],
  }
}

export default [
  createBundleConfig("index", "index", "laf")
]
