const Staff = require("../models/staff");
const resp = require("../helpers/apiResponse");
const cloudinary = require('cloudinary').v2
const bcrypt = require("bcryptjs");
const key = "verysecretkey";
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const staff = require("../models/staff");

exports.addstaff = async (req, res) => {
  const {
    fullname,
    email,
    mobile,
    password,
    cnfmPassword,
    approvedstatus,
    image,
    gender,
    dob,
    state,
    city,
    institute,
    
  } = req.body;

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newStaff = new Staff({
    fullname: fullname,
    email: email,
    mobile: mobile,
    password: hashPassword,
    cnfmPassword :hashPassword,
    approvedstatus: approvedstatus,
    image :image,
    gender :gender,
    dob :dob,
    state : state,
    city :city,
    institute :institute,
     
  });

  const findexist = await Staff.findOne({
    $or: [{ email: email }, { mobile: mobile }],
  });
  if (findexist) {
    resp.alreadyr(res);
  } else {
      if(req.files){
        console.log(req.files);
      }

    newStaff
      .save()
      .then((result) => {
        const token = jwt.sign(
          {
            staffId: staff._id,
          },
          key,
          {
            expiresIn: "365d",
          }
        );
        res.header("ad-token", token).status(200).json({
          status: true,
          ad_token: token,
          msg: "success",
          user: result,
        });
      })
      .catch((error) => resp.errorr(res, error));
  }
};


exports.stafflogin = async (req, res) => {
  const { mobile, email, password } = req.body;

  const staff = await Staff.findOne({
    $or: [{ mobile: mobile }, { email: email }],
  });
  if (staff) {
    //console.log(staff);
    if (staff.approvedstatus == true ) {
      const validPass = await bcrypt.compare(password, staff.password);
      if (validPass) {
        const token = jwt.sign(
          {
            staffId: staff._id,
          },
          key,
          {
            expiresIn: "365d",
          }
        );
        res.header("ad-token", token).status(200).send({
          status: true,
          ad_token: token,
          msg: "success",
          staff: staff,
        });
      } else {
        res.status(400).json({
          status: false,
          msg: "Incorrect Password",
          error: "error",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        msg: "Profile is under verification",
        error: "error",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      msg: "Staff Doesnot Exist",
      error: "error",
    });
  }
};

exports.setting = async (req, res) => {
  await Staff.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonestaff = async (req, res) => {
  await Staff.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewstaffbytoken = async (req, res) => {
  await Staff.findOne({ _id: req.staffId })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allstaff = async (req, res) => {
  await Staff.find()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletestaff = async (req, res) => {
  await Staff.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
