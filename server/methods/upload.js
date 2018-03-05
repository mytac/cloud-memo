const { connectDB } = require('../lib/mongo');
const { insertDocuments } = require('../mongo/add');
const { parameterInvalid, unknowError } = require('../lib/handleErrors');

function upload(req, res) {
  const { context } = req.body;
  if (!context) {
    parameterInvalid(res);
    return;
  }

  connectDB
    .then(db => insertDocuments(db, { context }))
    .then(data => res.json(data))
    .catch((err) => { unknowError(err, res); });
}

module.exports = {
  upload,
};
