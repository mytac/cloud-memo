const { ObjectID } = require('mongodb');
const { connectDB } = require('../lib/mongo');
const { updateDocument } = require('../mongo/update');
const { createError } = require('../lib/createError');

function update(req, res) {
  const { context, id } = req.body;
  connectDB
    .then(db => updateDocument(db, { _id: new ObjectID(id) }, { context }))
    .then(data => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(createError('SYSTEM_ERROR'));
    });
}

module.exports = { update };
