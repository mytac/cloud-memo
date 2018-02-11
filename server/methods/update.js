const { createError } = require('../lib/createError');
const { createResult } = require('../lib/createResult');
const errors = require('../constants/errors');

const updateDocument = (db, tar = { test: 1 }, newValue = { $set: { test: 100 } }, collectionName = 'documents') => new Promise((resolve, reject) => {
  const collection = db.collection(collectionName);
  collection.updateOne(tar, newValue, (err, { result }) => {
    if (err) {
      reject(createError(errors.HANDLE_DB_FAILED));
    } else {
      console.log('Updated the document with the field a equal to 2');
      resolve(createResult(result));
    }
  });
});


module.exports = { updateDocument };
