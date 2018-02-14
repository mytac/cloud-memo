const { ObjectID } = require('mongodb');
const { connectDB } = require('../lib/mongo');
const { removeDocument } = require('../mongo/delete');
const { parameterInvalid, unknowError } = require('../lib/handleErrors');

function remove(req, res) {
  const { id } = req.body;
  if (!id) {
    parameterInvalid(res);
    return;
  }
  connectDB
    .then(db => removeDocument(db, new ObjectID(id)))
    .then(data => res.json(data))
    .catch((err) => { unknowError(err, res); });
}

module.exports = {
  remove,
};
