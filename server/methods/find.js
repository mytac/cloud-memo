const { ObjectID } = require('mongodb');
const { connectDB } = require('../lib/mongo');
const { findDocuments } = require('../mongo/findByLabel');
const { unknowError } = require('../lib/handleErrors');

function find(req, res) {
  // 查某篇文章
  const { id } = req.body;
  const body = id ? new ObjectID(id) : {};
  connectDB
    .then(db => findDocuments(db, body))
    .then(data => res.json(data))
    .catch((err) => { unknowError(err, res); });
}

function getArticles(req, res) {
  const { pageNum, listNum } = req.body;

  connectDB
    .then(db => findDocuments(db, {}, pageNum, listNum))
    .then(data => res.json(data))
    .catch((err) => { unknowError(err, res); });
}

module.exports = {
  find,
  getArticles,
};
