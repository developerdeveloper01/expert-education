const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    course_title: {
      type: String,
    },
    teacher_name: {
      type: String,
    },
    desc: {
      type: String,
    },
    pdf: [{
      type: Number,
    }],
    video_link: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", thisSchema);
