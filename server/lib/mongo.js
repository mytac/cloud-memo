const { MongoClient } = require('mongodb');
const assert = require('assert');
const { mongodbURL, dbName } = require('../config/default');

function connectDB(operation = () => {}) {
  // Use connect method to connect to the server
  MongoClient.connect(mongodbURL, (err, client) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    operation(db);


    client.close();
  });
}

module.exports = { connectDB };
