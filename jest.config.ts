import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: false,
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  transform: {
    '<rootDir>/__tests__/*.spec.ts': 'ts-jest',
  },
  testMatch: ['**/src/__tests__/**/*.spec.ts', '**/src/__tests__/*.spec.ts'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@commands(.*)$': '<rootDir>/src/commands/$1',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@constants': '<rootDir>/src/constants/index.ts',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '//node_modules'],
}

export default config
