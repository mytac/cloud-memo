const { articleCollection } = require('../config/default');
const { createError } = require('../lib/createError');
const { createResult } = require('../lib/createResult');
const errors = require('../constants/errors');

const findDocuments = (db, data = {}, collectionName = articleCollection) =>
  new Promise((resolve, reject) => {
    const collection = db.collection(collectionName);
    collection.find(data).toArray((err, docs) => {
      if (err) {
        reject(createError(errors.HANDLE_DB_FAILED));
      } else {
        resolve(createResult(docs));
      }
    });
  });


module.exports = { findDocuments };
