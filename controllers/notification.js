const Notification = require("../models/notification");
const resp = require("../helpers/apiResponse");

exports.addNotification = async(req,res)=>{
    const{usertype,userid,staffid,noti_title,desc} = req.body

    const newNotification = new Notification({
        usertype :usertype,
        userid :userid,
        staffid :staffid,
        noti_title :noti_title,
        desc : desc
    })
const findexist = await Notification.findOne({noti_title :noti_title})
if(findexist){
    resp.alreadyr(res);
}else{
    newNotification
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }

}
 
exports.viewonenotification = async (req, res) => {
    await Notification.findOne({ _id: req.params.id })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  exports.viewoneNot_bytoken = async (req, res) => {
    await Notification.findOne({ staff: req.staffId })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
  exports.allNotification = async (req, res) => {
    await Notification.find()
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  exports.allNoti_bytoken = async (req, res) => {
    await Notification.find({staff: req.staffId})
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };