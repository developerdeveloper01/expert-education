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
  addstaff,
  stafflogin,
  setting,
  viewonestaff,
  viewstaffbytoken,
  allstaff,
  deletestaff,
} = require("../controllers/staff");

//Paths
router.post("/admin/addstaff", addstaff);
router.post("/admin/stafflogin", stafflogin);
router.post("/admin/setting/:id",upload.single("image"), setting);
router.get("/admin/viewonestaff/:id", viewonestaff);
router.get("/admin/viewstaffbytoken",verifyToken, viewstaffbytoken);
router.get("/admin/allstaff", allstaff);
router.get("/admin/deletestaff/:id", deletestaff);

module.exports = router;
