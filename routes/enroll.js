const express = require("express");
const router = express.Router();

const {
  enrollstu,
  allEnroll,
  editEnroll,
  viewoneEnroll,
  deleteEnroll,
  countEnroll,
  viewstudentbyteacherid,
  viewstudentbycourseid,
} = require("../controllers/enroll");

router.post("/admin/enrollstu", enrollstu);
router.post("/admin/editEnroll/:id", editEnroll);
router.get("/admin/allEnroll", allEnroll);

router.get("/admin/viewoneEnroll/:id", viewoneEnroll);
router.get("/admin/deleteEnroll/:id", deleteEnroll);
router.get("/admin/viewstudentbyteacherid/:id", viewstudentbyteacherid);
router.get("/admin/viewstudentbycourseid/:id", viewstudentbycourseid);
router.get("/admin/countEnroll", countEnroll);
module.exports = router;

//http://localhost:5000/api/admin/allusers
