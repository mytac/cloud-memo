const express = require('express');
const { upload } = require('../methods/upload');
const { remove } = require('../methods/delete');
const { find } = require('../methods/find');

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
router.post('/delete', remove);

// 按分类查找
router.post('/findByLabel', find);

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
