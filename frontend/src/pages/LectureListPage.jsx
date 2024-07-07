import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const sampleLectures = [
  {
    id: 1,
    title: "Einführung: Pseudocode, Hügelalgorithmen",
    description: "Learn the basics of pseudocode and hill-climbing algorithms.",
  },
  {
    id: 2,
    title: "Entwurfsmethoden I: Suchen und Sortieren, Divide-and-Conquer",
    description:
      "Learn about searching and sorting algorithms, and the divide-and-conquer method.",
  },
];

const courseTitle = "Algorithmen und Datenstrukturen";

const LectureListPage = () => {
  const { user } = useAuth();
  const [lectures, setLectures] = useState(sampleLectures);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">{courseTitle}</h2>
      <ul className="space-y-4">
        {lectures.map((lecture, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-medium mb-2">{lecture.title}</h3>
            <p className="mb-4">{lecture.description}</p>
            <Link
              to={`${lecture.id}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-4"
            >
              Go to Lecture
            </Link>
            <Link
              to={`${lecture.id}/quiz`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-4"
            >
              Start Quiz
            </Link>
            {user && user.role === "teacher" && (
              <Link
                to={`${lecture.id}/quiz/edit`}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-4"
              >
                Edit Lecture and Quiz
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureListPage;
