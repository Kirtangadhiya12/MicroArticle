const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  postid: {
    type: String,
    required: true
  },
  PostContent: {
    type: String,
    required: true
  },
  PostImage: {
    type: String,
    required: true
  },
  Publisher: {
    type: String,
    required: true
  },
  PostDate: {
    type: String,
    required: true
  },
  TimeStamp: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model("Post", PostSchema);
