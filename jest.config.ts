import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!src/**/*.d.ts",
    "!src/**/*.spec.ts",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
