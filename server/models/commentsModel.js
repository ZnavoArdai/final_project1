const { type } = require("@hapi/joi/lib/extend");
const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const comments = new Schema({
  commentBody: {
    type: String,
  },
  postsComments: {
    type: mongoose.Types.ObjectId,
    ref: "posts",
    required: true,
  },
});

module.exports = mongoose.model("comments", comments);
