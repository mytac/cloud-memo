const assert = require('assert');

const removeDocument = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a: 3 }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Removed the document with the field a equal to 3');
    callback(result);
  });
};

module.exports = { removeDocument };
