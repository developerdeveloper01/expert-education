const express = require("express");
const router = express.Router();

const {
  addcomm,
  allComment,
  viewoneComment,
  deleteComment,
  editComment,
  countComment,
} = require("../controllers/comment1");

router.post("/admin/addcomm", addcomm);
router.post("/admin/editComment/:id", editComment);
router.get("/admin/viewoneComment/:id", viewoneComment);
router.get("/admin/allComment", allComment);
router.get("/admin/deleteComment/:id", deleteComment);
router.get("/admin/countComment", countComment);
module.exports = router;

//http://localhost:5000/api/admin/allusers
