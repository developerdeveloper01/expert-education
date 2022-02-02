const Kycform = require("../models/kycform");
const resp = require("../helpers/apiResponse");

exports.addkycform = async (req, res) => {
  const { gender, dob, nationality, aadhar_num, pan_num,driving_licence_num,passport_num } = req.body;

  const newKycform = new Kycform({
    gender: gender,
    dob: dob,
    nationality: nationality,
    aadhar_num: aadhar_num,
    pan_num: pan_num,
    driving_licence_num: driving_licence_num,
    passport_num: passport_num,
  });
//   const findexist = await Kycform.findOne({ Kycformtitle: Kycformtitle });
//   if (findexist) {
//     resp.alreadyr(res);
//   } else {
    newKycform
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  //}
};

exports.verifykyc = async (req, res) => {
  await Kycform.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: {status:true} },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.editkycform = async (req, res) => {
  await Kycform.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewonekycform = async (req, res) => {
  await Kycform.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allkycform = async (req, res) => {
  await Kycform.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletekycform = async (req, res) => {
  await Kycform.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
