import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  semester: { type: String, required: true },
  lecturedBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  lecturingDays: { type: Array, required: false },
  studyProgram: { type: Array, required: true },
  isOpenToEnroll: { type: Boolean, required: true },
  lastUpdate: { type: Date, default: Date.now },
});

export const Course = mongoose.model("Course", CourseSchema);
