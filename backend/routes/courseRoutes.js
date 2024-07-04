import { Router } from "express";
import {
  getCourses,
  getCourseById,
  setCourse,
  updateCourse,
} from "../controllers/courseController.js";
import { verifyAdmin, verifyTeacher } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/courses", getCourses);
router.get("/course/:courseId", getCourseById);
router.post("/createCourse", setCourse);
router.patch("/edit/:courseId", updateCourse);

export default router;
