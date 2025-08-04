import { connect, disconnect } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

// In Jest, you cannot use `beforeAll` in this file directly.
// Instead, define global lifecycle hooks via environment or per test file.

// Optional helper if you're starting in-memory DB here:
global.__initDatabase = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('🧪 [setupFilesAfterEnv] In-memory MongoDB started');
};

global.__disconnectDatabase = async () => {
  await disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
  console.log('🧪 [setupFilesAfterEnv] In-memory MongoDB stopped');
};