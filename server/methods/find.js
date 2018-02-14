const { ObjectID } = require('mongodb');
const { connectDB } = require('../lib/mongo');
const { findDocuments } = require('../mongo/findByLabel');
const { createError } = require('../lib/createError');

function find(req, res) {
  const { id } = req.body;
  const body = id ? new ObjectID(id) : {};
  connectDB
    .then(db => findDocuments(db, body))
    .then(data => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(createError('SYSTEM_ERROR'));
    });
}

module.exports = {
  find,
};
