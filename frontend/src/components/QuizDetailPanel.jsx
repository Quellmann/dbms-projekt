import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const StudentQuizDetailPanel = { lecture };

const QuizDetailPanel = (quizInfo) => {
  const { user } = useAuth();

  if (user.role === "student") {
  } else {
  }
};

export default QuizDetailPanel;
