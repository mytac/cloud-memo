const assert = require('assert');

const findDocuments = function (db, callback = () => {}) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({ a: 'test' }).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

module.exports = { findDocuments };
