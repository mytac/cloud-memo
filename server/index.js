const express = require('express');

const app = express();

// 上传文章
app.get('/upload', (req, res) => {
  res.send('uploaded!!');
});

// 删除文章
app.get('/delete', (req, res) => {
  res.send('delete!!');
});

// 按分类查找
app.get('/findByLabel', (req, res) => {
  res.send('findByLabel!!');
});

// 404
app.use((req, res) => {
  res.status(404).send('404 not found');
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log(`the server is listening on ${host}:${port}`);
});
