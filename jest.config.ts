import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
