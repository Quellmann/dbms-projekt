import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
    unique: [true, "Please choose another username"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
    unique: [true, "Please choose another username"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
  role: {
    type: String,
    enum: ["admin", "student", "instructor"],
    default: "student",
  },
  passwordResetToken: String,
  passwordResetTokenCreatedAt: Date,
});

export const User = model("User", UserSchema);
