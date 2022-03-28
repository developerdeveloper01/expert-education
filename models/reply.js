const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplaySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    user_id2: { type: Schema.Types.ObjectId, ref: "user" },
    staff_id: { type: Schema.Types.ObjectId, ref: "staffs" },

    reply: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("reply", ReplaySchema);
