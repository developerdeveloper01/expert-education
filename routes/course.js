const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');
const { verifyToken } = require("../functions/admintoken");
const multer  = require('multer')
const fs = require('fs');

if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
  }

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

const {
  addcourse,
  editcourse,
  viewonecourse,
  allcourse,
  deletecourse,
} = require("../controllers/course");

//Paths
router.post("/admin/addcourse",upload.array('pdf', 12),  addcourse);
router.post("/admin/editcourse/:id", editcourse);
router.get("/admin/viewonecourse/:id", viewonecourse);
router.get("/admin/allcourse", allcourse);
router.get("/admin/deletecourse/:id", deletecourse);

module.exports = router;
