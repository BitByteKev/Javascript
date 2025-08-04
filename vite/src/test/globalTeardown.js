const { connection, disconnect } = require('mongoose');

module.exports = async () => {
  await connection.dropDatabase();
  await disconnect();
  console.log('🧹 [globalTeardown] MongoDB cleaned up');
};