import { model, Schema } from "mongoose";

const LectureSchema = new Schema(
  {
    courseId: { type: Schema.ObjectId, ref: "Course", required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    videoUrl: { type: String, required: false },
    thumbnailUrl: { type: String, required: false },
    pdfUrl: { type: String, required: false },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Lecture = model("Lecture", LectureSchema);
