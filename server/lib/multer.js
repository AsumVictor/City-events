const multer = require("multer");
const path = require("path");
const uuid4 = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, uuid4.v4() + path.extname(file.originalname));
  },
});


module.exports = multer({ storage });
