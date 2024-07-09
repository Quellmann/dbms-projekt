import { Router } from "express";
import {
  getStudentQuizzesOverview,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  getTeacherQuizOverview,
  // getQuizzesForCourse,
  // getQuizForLecture,
  // updateQuestion,
  // getVisibleQuizzes,
} from "../controllers/quizController.js";

const router = Router();

// For students
router.get("/quizzes/:userId", getStudentQuizzesOverview);
// router.get("/courses/:courseId/quizzes?userId=:userId", getQuizzesForCourse);
// router.get(
//   "/courses/:courseId/lectures/:lectureId/quiz?userId=:userId",
//   getQuizForLecture
// );

// For teachers
router.post("/question/:questionId/delete", deleteQuestion);
router.get(
  "/courses/:courseId/lectures/:lectureId/manageQuiz",
  getTeacherQuizOverview
);
router.post("/courses/:courseId/lectures/:lectureId/question", addQuestion);
router.patch(
  "/courses/:courseId/lectures/:lectureId/question/:questionId",
  updateQuestion
);

// For students
// router.post("/courses/:courseId/lectures/:lectureId/quiz/answer", addAnswer);

export default router;
