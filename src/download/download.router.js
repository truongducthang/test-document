const express = require('express');
const router = express.Router();
const downloadService = require('./download.service');

router.get('/test', downloadService.downloadFile);

module.exports = router;
