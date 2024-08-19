import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^themes$': '<rootDir>/src/themes',  
    '^themes/(.*)$': '<rootDir>/src/themes/$1', 
    '^pages$': '<rootDir>/src/pages',
    '^hooks$': '<rootDir>/src/hooks',
    '^types$': '<rootDir>/src/types',
    '^utils$': '<rootDir>/src/utils',
    '^components$': '<rootDir>/src/components',
    '^context$': '<rootDir>/src/contexts',
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
  },
  
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'], 
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['text'],
};

export default config;
