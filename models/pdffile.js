const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pdffileSchema  = new Schema (
    {
   pdf_title :{
       type : String
   },

pdf_file  : {
    
    type: String,
  },
},
{ timestamps: true }
)

module.exports = mongoose.model("pdffile",pdffileSchema)
