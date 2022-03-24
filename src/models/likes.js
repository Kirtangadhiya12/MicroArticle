const LikesSchema = new Schema({
  userid: { type: Schema.ObjectId, ref: "User" },
  postid: { type: Schema.ObjectId, ref: "Post" },
  commentid: { type: Schema.ObjectId, ref: "Comment" },
  rating: Number
});
LikesSchema.index({ userid: 1, postid: 1, commentid: 1 }, { unique: true });
