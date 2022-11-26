// @ts-nocheck
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
/** @type {import('@stryker-mutator/typescript-checker').StrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/angular",
  testRunner: "karma",
  karma: {
    configFile: "./projects/state-management/karma.conf.js",
    projectType: "angular-cli",
    config: {
      browsers: ["ChromeHeadless"],
    },
  },
  mutate: [
    "./projects/state-management/src/**/*.ts",
    "!./projects/state-management/src/**/*.spec.ts",
    "!./projects/state-management/src/test.ts",
    "!./projects/state-management/src/environments/*.ts",
    "!./projects/state-management/src/**/*.module.ts",
    "!./projects/state-management/src/main.ts",
    "!./projects/state-management/src/**/*.actions.ts",
    "!./projects/state-management/src/**/*.model.ts",
    "!./projects/state-management/src/**/*.selector.ts",
  ],
  reporters: ["progress", "clear-text", "html"],
  concurrency: 4,
  concurrency_comment:
    "Recommended to use about half of your available cores when running stryker with angular",
  coverageAnalysis: "perTest",
  timeoutMS: 30000,
  tempDirName: 'stryker-tmp',
  disableTypeChecks: "**/*.{js,ts,jsx,tsx}"
};
export default config;
