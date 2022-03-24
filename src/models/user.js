const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  UserName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  following: {
    type: Schema.ObjectId,
    ref: "User"
  },
  followers: {
    type: Schema.ObjectId,
    ref: "User"
  }
});
module.exports = mongoose.model("User", UserSchema);
