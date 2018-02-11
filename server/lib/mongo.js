const { MongoClient } = require('mongodb');
const { mongodbURL, dbName } = require('../config/default');
const { createError } = require('../lib/createError');
const errors = require('../constants/errors');

const connectDB = new Promise((resolve, reject) => {
  MongoClient.connect(mongodbURL, (err, client) => {
    if (err) {
      reject(createError(errors.CONNECT_DB_FAILED));
    } else {
      const db = client.db(dbName);
      resolve(db);
    }
  });
});

module.exports = { connectDB };

