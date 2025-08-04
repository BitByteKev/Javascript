import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function globalSetup() {
    const instance = await MongoMemoryServer.create({
        binary: {
            version: 'latest', // Use the latest MongoDB version
        },
    });

    const uri = instance.getUri();
    process.env.DATABASE_URL = uri;

    // Optionally, you can store the instance for teardown
    global.__MONGOINSTANCE = instance;

    console.log('MongoDB Memory Server started at:', uri);
}