var multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/'); //hỉnh ảnh sẽ chưa trong folder uploads
  },
  filename: (req, file, cb) => {
    console.log('file:>>', file);
    cb(null, file.originalname); // mặc định sẽ save name của hình ảnh
    // là name gốc, chúng ta có thể rename nó.
  },
});

var upload = multer({ storage: storage }); //save trên local của server khi dùng multer

module.exports = upload;
