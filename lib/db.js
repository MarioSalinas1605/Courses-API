const { MongoClient } = require('mongodb')
const config = require('../config/index')

const MONGO_URI = `mongodb+srv://${config.user}:${config.password}@${config.host}/${config.name}?retryWrites=true&w=majority`;
let connection

async function connectDB() {
    if (connection) return connection

    let client 
    try {
        client = await MongoClient.connect(MONGO_URI, { useNewUrlParser: true });
        connection = client.db('platzi-courses')
    } catch (error) {
        console.error('Could not connect to db', mongoURL, error);
        process.exit(1)
    }
    return connection
}

module.exports = connectDB