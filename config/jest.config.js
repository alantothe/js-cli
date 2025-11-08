module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/exercises/**/*.test.js'],
  collectCoverageFrom: ['**/exercises/**/*.js', '!**/node_modules/**', '!**/exercises/__backups__/**'],
  verbose: false,
  testTimeout: 10000,
  reporters: [[`${__dirname}/custom-reporter.js`, {}]],
  rootDir: '..',
  silent: true,
};
