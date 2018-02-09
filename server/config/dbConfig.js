const { MongoClient } = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'memo';

function connectDB() {
  // Use connect method to connect to the server
  MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
  });
}

module.exports = { connectDB };
