require('dotenv').config
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectionString = () => {

    let connectionUri;

    if (process.env.NODE_ENV === 'development') {
        connectionUri = process.env.DATABASE_LOCAL
        connectionUri = connectionUri.replace('<username>', process.env.DB_USER)
        connectionUri = connectionUri.replace('<password>', process.env.DB_PASS)
    } else {
        connectionUri = process.env.DATABASE_PROD
        connectionUri = connectionUri.replace('<username>', process.env.DB_USER)
        connectionUri = connectionUri.replace('<password>', process.env.DB_PASS)
    }
    return connectionUri
}

const uri = connectionString()

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client

