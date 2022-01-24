const Course = require("../models/course");
const resp = require("../helpers/apiResponse");
const cloudinary = require('cloudinary').v2

exports.addcourse = async (req, res) => {
  const { course_title, teacher_name,desc,pdf, video_link } = req.body;

  const newCourse = new Course({
    course_title: course_title,
    teacher_name: teacher_name,
    desc: desc,
    video_link: video_link,
  });
  const findexist = await Course.findOne({ course_title: course_title });
  if (findexist) {
    resp.alreadyr(res);
  } else {

    if(req.files){
        console.log(req.files);
        // cloudinary.uploader.upload("my_picture.jpg", function(error, result) { console.log(result) });
    }
    newCourse
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editcourse = async (req, res) => {
  await Course.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonecourse = async (req, res) => {
  await Course.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allcourse = async (req, res) => {
  await Course.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletecourse = async (req, res) => {
  await Course.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
