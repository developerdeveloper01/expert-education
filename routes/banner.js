const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { check } = require("express-validator");
//const { verifyToken } = require("../functions/stafftoken");
const { verifyToken } = require("../functions/stafftoken");

const multer = require("multer");
const fs = require("fs");
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const {
    addbanner,

} = require("../controllers/banner");

//paths

router.post("/admin/addbanner", upload.single("image"), addbanner);
 
 

module.exports = router;
//console
