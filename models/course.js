const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    course_title: {
      type: String,
    },
    course_image: {
      type: String,
    },
    desc: {
      type: String,
    },
    long_desc: {
      type: String,
    },
    pdf: [{
      pdf_image: String,
      pdf_file: String,
    }],
    video_link: [{
      video_image: String,
      video_file: String,
    }],
    teacher: {
      type: Schema.Types.ObjectId, ref: "staff"
    },
    category: {
      type: String,
    },
    popularity : {
      type :Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", thisSchema);
