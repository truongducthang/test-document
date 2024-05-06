const express = require('express');
const router = express.Router();
const downloadService = require('./download.service');
const uploadMulter = require('../files/ModelMulter');

router.get('/files/:filename', downloadService.downloadFile);
router.post('/upload', uploadMulter.single('file'), downloadService.uploadFile);

module.exports = router;
