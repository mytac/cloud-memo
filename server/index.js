const express = require('express');

const app = express();
const router = express.Router();

// 上传文章
router.get('/upload', (req, res) => {
  res.send('uploaded!!');
});

// 删除文章
router.get('/delete', (req, res) => {
  res.send('delete!!');
});

// 按分类查找
router.get('/findByLabel', (req, res) => {
  res.send('findByLabel!!');
});

// 404
router.use((req, res) => {
  res.status(404).send('404 not found');
});

// 500
router.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log(`the server is listening on ${host}:${port}`);
});
