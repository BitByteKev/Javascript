import { createServer } from 'node:http';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const client = new MongoClient(url);

async function start() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }

    const db = client.db(dbName);

    const server = createServer(async (req, res) => {
        try {
            const users = db.collection('users');
            const userList = await users.find().toArray();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ userList }));
        } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to fetch users' }));
        }
    });

    const host = 'localhost';
    const port = 3000;
    server.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
    });
}

start();
