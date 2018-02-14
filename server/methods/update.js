const { connectDB } = require('../lib/mongo');
const { insertDocuments } = require('../mongo/add');
const { createError } = require('../lib/createError');

function update(req, res) {
  const { context } = req.body;
  connectDB
    .then(db => insertDocuments(db, { context }))
    .then(data => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(createError('SYSTEM_ERROR'));
    });
}

module.exports = {
  upload,
};
