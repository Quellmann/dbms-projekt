function Home() {
  const latestLecture = {
    title: "Test Title",
    description: "This is a test description",
    updatedAt: "27.06.2024",
  };

  return (
    <div className="mx-auto max-w-7xl p-2 lg:px-8 ">
      <div className="pt-10">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-200">
            Hello, Student!
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Welcome back to your learning dashboard.
          </p>
        </div>

        {/* Latest Lecture Feed */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-slate-400">
            Latest Lecture Update
          </h2>
          {latestLecture ? (
            <div className="bg-gray-50 rounded-lg p-4 dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200">
                {latestLecture.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                {latestLecture.description}
              </p>
              <p className="text-gray-400 text-sm dark:text-slate-400">
                Updated on:{" "}
                {new Date(latestLecture.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">Loading latest lecture...</p>
          )}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
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

          {/* Card 2 */}
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

          {/* Card 3 */}
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
}

export default Home;
