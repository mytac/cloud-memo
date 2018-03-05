const { articleCollection } = require('../config/default');
const { createError } = require('../lib/createError');
const { createResult } = require('../lib/createResult');
const errors = require('../constants/errors');

const updateDocument = (
  db,
  tar = { test: 1 },
  newValue = { $set: { test: 100 } },
  collectionName = articleCollection,
) => new Promise((resolve, reject) => {
  const collection = db.collection(collectionName);
  collection.updateOne(tar, { $set: newValue }, (err, result) => {
    if (err) {
      reject(createError(errors.HANDLE_DB_FAILED));
    } else {
      resolve(createResult(result));
    }
  });
});


module.exports = { updateDocument };
