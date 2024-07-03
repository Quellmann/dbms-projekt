import { Router } from "express";
import {
  getLecturesByCourse,
  getLectureById,
  setLecture,
  updateLecture,
  increaseViewCount,
} from "../controllers/lectureController.js";

const router = Router();

router.get("/course/:id/lectures", getLecturesByCourse);
router.get("/course/:id/lecture/:id", getLectureById);
router.post("/course/:id/createLecture", setLecture);
router.patch("/course/:id/edit/:id", updateLecture);
router.patch("/:id/increaseViewCount", increaseViewCount);

export default router;
