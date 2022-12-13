const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const users = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  password: {
    type: String,
    required: true,
    min: 10,
    max: 99999,
  },

  posts:[{
    type:String,
    
  }]
});

module.exports = mongoose.model("users", users);
