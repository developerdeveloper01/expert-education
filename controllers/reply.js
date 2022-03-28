const Reply = require("../models/reply");
const resp = require("../helpers/apiResponse");

exports.addreply = async (req, res) => {
  const { reply, user_id, staff_id, user_id2 } = req.body;

  // const salt = await bcrypt.genSalt(10);
  //const hashPassword = await bcrypt.hash(password, salt);

  const newReply = new Reply({
    reply: reply,
    user_id: user_id,
    user_id2: user_id2,
    staff_id: staff_id,
  });

  //const findexist = await User.findOne({ comment: comment });

  newReply
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.allReply = async (req, res) => {
  await Reply.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewoneReply = async (req, res) => {
  await Reply.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deleteReply = async (req, res) => {
  await Reply.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.editReply = async (req, res) => {
  await Reply.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.countReply = async (req, res) => {
  await Reply.countDocuments()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
