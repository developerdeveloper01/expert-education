const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    password: {
      type: String,
    },
    confirmPassword:{
type :String
    },
    approvedstatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("staff", thisSchema);
