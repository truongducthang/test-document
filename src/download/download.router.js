const express = require('express');
const router = express.Router();
const downloadService = require('./download.service');

router.get('/files/:filename', downloadService.downloadFile);

module.exports = router;
