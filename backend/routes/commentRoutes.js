import { Router } from "express";
import {
  getCommentsByLecture,
  setComment,
} from "../controllers/commentController.js";

const router = Router();

router.get(
  "/course/:courseId/lecture/:lectureId/getComments",
  getCommentsByLecture
);
router.post("/course/:courseId/lecture/:lectureId/setComment", setComment);

export default router;
