const { connectDB } = require('../lib/mongo');
const { ObjectID } = require('mongodb');
const { insertDocuments } = require('../mongo/add');
const { updateDocument } = require('../mongo/update');
const { parameterInvalid, unknowError } = require('../lib/handleErrors');

function upload(req, res) {
  const { context, title, id } = req.body;
  if (!context || !title) {
    parameterInvalid(res);
    return;
  }

  if (id) {
    connectDB
      .then(db => updateDocument(db, { _id: new ObjectID(id) }, { context, title }))
      .then(data => res.json(data))
      .catch((err) => { unknowError(err, res); });
  } else {
    connectDB
      .then(db => insertDocuments(db, { context, title }))
      .then(data => res.json(data))
      .catch((err) => { unknowError(err, res); });
  }
}

module.exports = {
  upload,
};
