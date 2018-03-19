const { connectDB } = require('../lib/mongo');
const { ObjectID } = require('mongodb');
const { insertDocuments } = require('../mongo/add');
const { updateDocument } = require('../mongo/update');
const { parameterInvalid, unknowError } = require('../lib/handleErrors');

function upload(req, res) {
  const { content, title, id } = req.body;
  if (!content || !title) {
    parameterInvalid(res);
    return;
  }

  if (id) {
    connectDB
      .then(db => updateDocument(db, { _id: new ObjectID(id) }, { content, title }))
      .then(data => res.json(data))
      .catch((err) => { unknowError(err, res); });
  } else {
    connectDB
      .then(db => insertDocuments(db, { content, title }))
      .then((data) => {
        const newId = new ObjectID();
        const backData = Object.assign(data);
        backData.body.id = newId;
        return res.json(backData);
      })
      .catch((err) => { unknowError(err, res); });
  }
}

module.exports = {
  upload,
};
