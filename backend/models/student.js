import { model, Schema, Types } from "mongoose";

const StudentSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },
  lecturesViewed: {
    type: [Types.ObjectId],
    default: [],
  },
});

export const Student = model("Student", StudentSchema);
