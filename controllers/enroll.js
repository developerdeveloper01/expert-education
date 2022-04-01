const Enroll = require("../models/enroll");
const resp = require("../helpers/apiResponse");

exports.enrollstu = async (req, res) => {
  const { user_id, staff_id, course_id, username } = req.body;

  const newEnroll = new Enroll({
    user_id: user_id,
    staff_id: staff_id,
    course_id: course_id,
    username: username,
  });
  //const findexist = await Comment1.findOne({ comment: comment });
  // if (findexist) {
  //  resp.alreadyr(res);
  // } else {
  newEnroll
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
  // }
};

exports.allEnroll = async (req, res) => {
  await Enroll.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.editEnroll = async (req, res) => {
  await Enroll.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewoneEnroll = async (req, res) => {
  await Enroll.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.deleteEnroll = async (req, res) => {
  await Enroll.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.countEnroll = async (req, res) => {
  await Enroll.countDocuments()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewstudentbyteacherid = async (req, res) => {
  await Enroll.find({ teacher: req.params.teacher })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.viewstudentbycourseid = async (req, res) => {
  await Enroll.find({ course: req.params.course })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};



