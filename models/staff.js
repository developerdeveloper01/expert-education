const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    fullname: {
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
    cnfmPassword:{
type :String
    },
    approvedstatus: {
      type: Boolean,
      default: true,
    },
    gender : {
      type : String
    },
    dob :{
      type : String
    },
    city : {
      type : String
    },
    institute :{
      type : String
    },
     
  },
  { timestamps: true }
);

module.exports = mongoose.model("staff", thisSchema);
