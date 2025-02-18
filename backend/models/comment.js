import { model, Schema, Types } from "mongoose";

const commentSchema = new Schema(
  {
    lectureId: {
      type: Types.ObjectId,
      ref: "Lecture",
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Comment = model("Comment", commentSchema);
