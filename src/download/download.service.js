const path = require('path');
const fs = require('fs');

const baseUrl = 'http://localhost:4000/files/';
exports.downloadFile = async (req, res, next) => {
  try {
    const directoryPath = __basedir + '/public/files/';
    const filename = 'sample.ppt';
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
