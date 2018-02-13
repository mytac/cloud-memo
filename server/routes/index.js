const express = require('express');
const { upload } = require('../methods/upload');

const router = express.Router();
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// insertThingsToDB();
router.get('/', (req, res) => {
  res.send('/////');
});
// 上传文章
router.post('/upload', upload);

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

module.exports = router;
