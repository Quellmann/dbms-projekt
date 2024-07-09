import { model, Schema, Types } from "mongoose";

const QuizQuestionSchema = new Schema(
  {
    lectureId: {
      type: Types.ObjectId,
      required: true,
      ref: "Lecture",
    },
    questionText: {
      type: String,
      required: true,
    },
    possibleAnswers: [{ type: Types.ObjectId, ref: "QuizAnswer" }],
  },
  { timestamps: true }
);

QuizQuestionSchema.methods.findCorrectAnswer = function (cb) {
  return this.possibleAnswers.findOne({ isCorrect: true }, cb);
};

// TODO: Write correctAnswer helper method

export const QuizQuestion = model("QuizQuestion", QuizQuestionSchema);
