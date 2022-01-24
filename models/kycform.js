const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    gender: {
      type: String,
    },
    dob: {
      type: String,
    },
    nationality: {
      type: Number,
    },
    aadhar_num: {
      type: String,
    },
    pan_num: {
      type: String,
    },
    driving_licence_num: {
      type: String,
    },
    passport_num: {
      type: String,
    },
    aadhar_front_img: {
      type: String,
    },
    aadhar_back_img: {
      type: String,
    },
    pan_img: {
      type: String,
    },
    driving_l_img: {
      type: String,
    },
    passport_img: {
      type: String,
    },
    selfie: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("kycform", thisSchema);
