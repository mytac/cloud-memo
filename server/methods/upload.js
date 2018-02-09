const assert = require('assert');

const insertDocuments = function (db, callback = () => {}) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertOne({ a: 'test' }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log('Inserted a document into the collection');
    callback(result);
  });
};

module.exports = { insertDocuments };
