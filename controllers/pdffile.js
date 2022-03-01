 const Pdffile = require("../models/pdffile");
const resp = require("../helpers/apiResponse");
 const { uploadFile } = require("../helpers/awsuploader");

 const fs = require("fs");

exports.addpdf = async(req,res) =>{
    const {pdf_title,pdf_file}  = req.body

    const newPdffile = new Pdffile({
        pdf_title: pdf_title,
        pdf_file : pdf_file
        
      });

    const findexist = await Pdffile.findOne({ pdf_title: pdf_title });
    if (findexist) {
      resp.alreadyr(res);
      
    // } else {
  
    //   if(req.files){
    //       console.log(req.files);
    // //       // cloudinary.uploader.upload("my_picture.jpg", function(error, result) { console.log(result) });
    //    }
      newPdffile
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
    }
  };
    
   
    

