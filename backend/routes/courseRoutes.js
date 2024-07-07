import { Router } from "express";
import {
  getCourses,
  getCourseById,
  setCourse,
  updateCourse,
} from "../controllers/courseController.js";

const router = Router();

router.get("/courses", getCourses);
router.post("/courses", setCourse);
router.get("/courses/:courseId", getCourseById);
router.patch("/courses/:courseId", updateCourse);

export default router;
