module.exports = {
  globalSetup: './src/test/globalSetup.cjs',
  globalTeardown: './src/test/globalTeardown.js',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/test/setupFilesAfterEnv.js']
};

