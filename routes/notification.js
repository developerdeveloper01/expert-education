const express = require("express");
const router = express.Router();
const { verifyToken } = require("../functions/stafftoken");

const {addNotification,viewonenotification,viewoneNot_bytoken,allNotification,allNoti_bytoken
   
} = require("../controllers/notification");

router.post("/admin/addNotification", addNotification);
router.get("/admin/viewonenotification/:id", viewonenotification);
router.get("/admin/viewoneNot_bytoken",verifyToken, viewoneNot_bytoken);
router.get("/admin/allNotification", allNotification);

router.get("/admin/allNoti_bytoken",verifyToken, allNoti_bytoken);


 
 module.exports = router;





//http://localhost:5000/api/admin/allusers