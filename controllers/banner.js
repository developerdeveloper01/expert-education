const Banner = require("../models/banner");
const resp = require("../helpers/apiResponse");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcryptjs");
const key = "verysecretkey";
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
 
exports.addbanner = async (req, res) => {
  const {
    title,
    image
  } = req.body;

 

  const newBanner = new Banner({
      title:title,
    image: image,
  });

  const findexist = await Banner.findOne({title :title});
  if (findexist) {
    resp.alreadyr(res);
  } else {
    if (req.files) {
      console.log(req.files);
    }
    newBanner
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}
};

 
