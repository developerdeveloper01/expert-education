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

// exports.stafflogin = async (req, res) => {
//   const { mobile, email, password } = req.body;

//   const staff = await Staff.findOne({
//     $or: [{ mobile: mobile }, { email: email }],
//   });
//   if (staff) {
//     console.log(staff);
//     if (staff.approvedstatus == true ) {
//       const validPass = await bcrypt.compare(password, staff.password);
//       if (validPass) {
//         const token = jwt.sign(
//           {
//             staffId: staff._id,
//           },
//           key,
//           {
//             expiresIn: "365d",
//           }
//         );
//         res.header("staff-token", token).status(200).send({
//           status: true,
//           token: token,
//           msg: "success",
//           staff: staff,
//         });
//       } else {
//         res.status(400).json({
//           status: false,
//           msg: "Incorrect Password",
//           error: "error",
//         });
//       }
//     } else {
//       res.status(400).json({
//         status: false,
//         msg: "Profile is under verification",
//         error: "error",
//       });
//     }
//   } else {
//     res.status(400).json({
//       status: false,
//       msg: "Staff Doesnot Exist",
//       error: "error",
//     });
//   }
// };

 
 

 

 

//console
