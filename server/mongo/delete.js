const { articleCollection } = require('../config/default');
const { createError } = require('../lib/createError');
const { createResult } = require('../lib/createResult');
const errors = require('../constants/errors');

const removeDocument = (db, data = { test: 1 }, collectionName = articleCollection) => new Promise((resolve, reject) => {
  const collection = db.collection(collectionName);
  collection.deleteOne(data, (err, res) => {
    if (err) {
      reject(createError(errors.HANDLE_DB_FAILED));
    } else {
      resolve(createResult(res));
    }
  });
});

module.exports = { removeDocument };
