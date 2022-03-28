const express = require("express");
const router = express.Router();

const {
  addreply,
  allReply,
  viewoneReply,
  deleteReply,
  editReply,
  countReply,
} = require("../controllers/reply");

router.post("/admin/addreply", addreply);
router.post("/admin/editReply/:id", editReply);
router.get("/admin/viewoneReply/:id", viewoneReply);
router.get("/admin/allReply", allReply);
router.get("/admin/deleteReply/:id", deleteReply);
router.get("/admin/countReply", countReply);
module.exports = router;

//console
