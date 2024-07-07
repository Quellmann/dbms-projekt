import { model, Schema, Types } from "mongoose";

const LectureQuestionSchema = new Schema({
  lectureId: {
    type: Types.ObjectId,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  possibleAnswers: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

export const LectureQuestion = model("LectureQuestion", LectureQuestionSchema);
