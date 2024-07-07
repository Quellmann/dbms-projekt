import { useAuth } from "../context/UserContext";

const StudentDashboardPage = () => {
  const { user } = useAuth();

  const latestLecture = {
    title: "Programmierung von Datenbanken",
    description:
      "konzeptionelles Datenbankdesign; Methoden des Datenbankdesigns; Entity-Relationship-Modell; Relationales Datenmodell; Umsetzung des Entity-Relationship-Modells; Relationale Algebra; Anfragesprache SQL; Optimierung; Funktionale Abhängigkeit; Normalformen; Transaktionen",
    updatedAt: "2024-06-27",
  };

  return (
    <div className="">
      <div className="pt-10">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Hello, {user.username}!</h1>
          <p className="text-lg text-gray-600 ">
            Welcome back to your learning dashboard.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Latest Lecture Update
          </h2>
          {latestLecture ? (
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {latestLecture.title}
              </h3>
              <p className="text-gray-600">{latestLecture.description}</p>
              <p className="text-gray-400 text-sm">
                Updated on:{" "}
                {new Date(latestLecture.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">Loading latest lecture...</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pick Up Where You Left Off
            </h3>
            <p className="text-gray-600">
              Continue from your last watched lecture and keep the momentum
              going.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Resume
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Watch the Newest Lecture
            </h3>
            <p className="text-gray-600">
              Check out the latest lecture and stay up to date with new content.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Watch Now
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Take This Multiple Choice Test
            </h3>
            <p className="text-gray-600">
              Test your knowledge with a quick multiple-choice test.
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
              Take Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
