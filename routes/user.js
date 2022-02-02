const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/tokenverify");

const {
  signup,
  login,
  setting,
  changepass,
  changepassid,
  viewoneuser,
  edituser,
  allusers,
  deleteuser,
  myprofile
} = require("../controllers/user");

router.post("/user/signup", signup);
router.post("/user/login", login);
router.post("/user/setting", verifyToken, setting);
router.post("/user/changepass", verifyToken, changepass);
router.get("/user/myprofile", verifyToken, myprofile);
router.post("/admin/edituser/:id", edituser);
router.post("/user/changepassid/:id", changepassid);
router.get("/admin/viewoneuser/:id", viewoneuser);
router.get("/admin/allusers", allusers);
router.get("/admin/deleteuser/:id", deleteuser);

module.exports = router;
