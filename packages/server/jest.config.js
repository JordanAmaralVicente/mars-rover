/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    "databases/typeorm/entities",
    "types",
    "mocks"
  ],
  modulePathIgnorePatterns: ["mocks"]
};