import mongoose from 'mongoose';

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoPath: {type: String, required: true},
  pdfPath: {type: String, required: true},
  date: { type: Date, default: Date.now },
  course: { type: mongoose.Schema.ObjectId, ref: 'Course', required: true }, // Reference to the Course model
  lastUpdate: { type: Date, default: Date.now },
});

export const Lecture = mongoose.model('Lecture', LectureSchema);