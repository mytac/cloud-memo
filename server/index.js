const express = require('express');
const routers = require('./routes');
const { port } = require('./config/default');
const { connectDB } = require('./lib/mongo');
const { insertDocuments } = require('./methods/add');
const { findDocuments } = require('./methods/findByLabel');
const { updateDocument } = require('./methods/update');
const { removeDocument } = require('./methods/delete');

const app = express();

/* connectDB.then(db => findDocuments(db)).then(data => console.log('data', data))
  .catch((err) => {
    console.log(err);
  }); */
// 该路由使用的中间件
app.use('/', routers);

const server = app.listen(port, () => {
  const host = server.address().address;

  console.log(`the server is listening on ${host}:${port}`);
});
