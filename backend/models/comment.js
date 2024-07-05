import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture", // Replace 'Post' with the name of the related model
    required: true,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

export const Comment = mongoose.model("Comment", commentSchema);
