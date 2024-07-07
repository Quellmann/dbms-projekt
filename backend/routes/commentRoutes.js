import { Router } from "express";
import {
  getCommentsByLecture,
  setComment,
} from "../controllers/commentController.js";

const router = Router();

router.get(
  "/courses/:courseId/lectures/:lectureId/comments",
  getCommentsByLecture
);
router.post("/courses/:courseId/lectures/:lectureId/comments", setComment);

export default router;
