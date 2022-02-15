const Category = require("../models/category");
const resp = require("../helpers/apiResponse");
 
exports.addCat = async (req, res) => {
  const { catName } = req.body;

  const newCategory = new Category({
    catName :catName
  });
  const findexist = await Inquiry.findOne({ catName: catName });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    newInquiry
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.editCat = async (req, res) => {
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

exports.viewoneCat = async (req, res) => {
  await Course.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allCat = async (req, res) => {
  await Course.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleteCat = async (req, res) => {
  await Course.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
