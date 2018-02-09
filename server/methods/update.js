const assert = require('assert');

const updateDocument = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne(
    { a: 2 }
    , { $set: { b: 1 } }, (err, result) => {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log('Updated the document with the field a equal to 2');
      callback(result);
    },
  );
};


module.exports = { updateDocument };
