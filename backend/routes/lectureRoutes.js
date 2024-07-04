import { Router } from "express";
import {
  getLecturesByCourse,
  getLectureById,
  setLecture,
  updateLecture,
  increaseViewCount,
} from "../controllers/lectureController.js";

const router = Router();

router.get("/course/:courseId/lectures", getLecturesByCourse);
router.get("/course/:courseId/lecture/:lectureId", getLectureById);
router.post("/course/:courseId/createLecture", setLecture);
router.patch("/course/:courseId/edit/:lectureId", updateLecture);
router.patch("/:lectureId/increaseViewCount", increaseViewCount);

export default router;
