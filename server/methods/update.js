const { ObjectID } = require('mongodb');
const { connectDB } = require('../lib/mongo');
const { updateDocument } = require('../mongo/update');
const { parameterInvalid, unknowError } = require('../lib/handleErrors');

function update(req, res) {
  const { context, id } = req.body;
  if (!id || !context) {
    parameterInvalid(res);
    return;
  }

  connectDB
    .then(db => updateDocument(db, { _id: new ObjectID(id) }, { context }))
    .then(data => res.json(data))
    .catch((err) => { unknowError(err, res); });
}

module.exports = { update };
