const express = require("express");
const router = express.Router();

const {
  addkycform,
  editkycform,
  viewonekycform,
  allkycform,
  deletekycform,
} = require("../controllers/kycform");

//Paths
router.post("/admin/addkycform", addkycform);
router.post("/admin/editkycform/:id", editkycform);
router.get("/admin/viewonekycform/:id", viewonekycform);
router.get("/admin/allkycform", allkycform);
router.get("/admin/deletekycform/:id", deletekycform);

module.exports = router;
