const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const posts = new Schema({
  title: {
    type: String,
    required: true,

  },
  description: {
    type: String,
    required: true,
   
  },
  image: {
    type: String,
    required: true,
 
  },
  category: {
    type: String,
    default:"html"||"css"||"javascript" 
  },
date:{
    type:Date,
    required: true,
},
  users:[{
    type:String,
    required:true,
    
  }]
});

module.exports = mongoose.model("posts", posts);
