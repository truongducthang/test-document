const path = require('path');
const fs = require('fs');
const uploadMulter = require('../files/ModelMulter');
const baseUrl = 'http://localhost:4000/files/';
exports.downloadFile = async (req, res, next) => {
  try {
    const directoryPath = __basedir + '/public/files/';

    const filename = req.params.filename;
    console.log('directoryPath + filename', directoryPath + filename);
    res.download(directoryPath + filename, filename, (error) => {
      if (error) {
        return next(error);
      }
    });

    // res.status(201).json({
    //   status: 'success',
    //   data: null,
    // });
  } catch (error) {
    next(error);
  }
};

exports.uploadFile = async (req, res, next) => {
  try {
    // uploadMulter.single('file');
    res.status(201).json({
      status: 'success',
      data: req.file,
    });
  } catch (error) {
    next(error);
  }
};
