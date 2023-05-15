/** @type {import('ts-jest').JestConfigWithTsJest} */
require('dotenv').config()
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config']
};