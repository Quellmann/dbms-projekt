import { model, Schema, Types } from "mongoose";

const AnswerSchema = new Schema(
  {
    lectureQuestionId: {
      type: Types.ObjectId,
      required: true,
    },
    studentId: {
      type: Types.ObjectId,
      required: true,
    },
    answeredCorrectly: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Answer = model("Answer", AnswerSchema);
