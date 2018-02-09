const { MongoClient } = require('mongodb');
const assert = require('assert');
const { mongodbURL, dbName } = require('../config/default');

const connectDB = new Promise((resolve, reject) => {
  MongoClient.connect(mongodbURL, (err, client) => {
    if (err) {
      reject(err);
    } else {
      assert.equal(null, err);
      console.log('Connected successfully to server');

      const db = client.db(dbName);
      resolve(db);
    }
  });
});

module.exports = { connectDB };

