const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  CommentId: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  publisher:{
      type:String,
      required: true

  },
  TimeStamp: {
    type: String,
    required: true

  }
});
module.exports = mongoose.model("User", CommentSchema);
