const express = require("express");
const router = express.Router();

const { addinquiry, allinquiry } = require("../controllers/inquiry");

router.post("/admin/addinquiry", addinquiry);
//router.post("/admin/editCat/:id", editCat);
//router.get("/admin/viewoneCat/:id", viewoneCat);
router.get("/admin/allinquiry", allinquiry);
//router.get("/admin/deleteCat/:id", deleteCat);

module.exports = router;

//http://localhost:5000/api/admin/allusers
