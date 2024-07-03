import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  videoUrl: { type: String, required: false },
  thumbnailUrl: { type: String, required: false },
  pdfUrl: { type: String, required: false },
  course: { type: mongoose.Schema.ObjectId, ref: "Course", required: true }, // Reference to the Course model
  views: { type: Number, default: 0 },
  lastUpdate: { type: Date, default: Date.now },
});

export const Lecture = mongoose.model("Lecture", LectureSchema);
