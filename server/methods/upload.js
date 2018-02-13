const { connectDB } = require('../lib/mongo');
const { insertDocuments } = require('../mongo/add');

function upload(req, res) {
  const { context } = req.body;
  connectDB
    .then(db => insertDocuments(db, { context }))
    .then(data => res.json(data))
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  upload,
};
