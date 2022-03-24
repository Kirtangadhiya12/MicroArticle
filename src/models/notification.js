const mongoose = require("mongoose");
const NotificationSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  Postid: {
    type: String,
    required: true
  },
  receiver:{
      type:String,
      required: true

  },
  action: {
    type: String,
    required: true

  },
  type: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("User", NotificationSchema);
