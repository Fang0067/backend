export default {
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  // stellar-sdk v17 and its deps (uint8array-extras, js-xdr) ship untranspiled
  // ESM, so they must not be ignored by the default node_modules pattern.
  transformIgnorePatterns: ["node_modules/(?!(@stellar|uint8array-extras)/)"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/**/__tests__/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "text-summary", "lcov", "json-summary"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
