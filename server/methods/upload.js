const { connectDB } = require('../lib/mongo');
const { insertDocuments } = require('../mongo/add');

function upload(req, res) {
  console.log(req.query.context);
  res.send(`${req.query.context}`);
}
