const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommSchema = new Schema(
  {
    user_id: {
      type: String,
    },

    staff_id: {
      type: String,
    },

    course_id: {
      type: String,
    },

    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("enroll", CommSchema);
