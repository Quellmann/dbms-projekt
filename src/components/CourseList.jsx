import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CourseList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch(`http://localhost:5050/courselist`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        console.error(error.message);
      }
    }
    getRecords();
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-2 lg:px-8">
      <div>
        <h1 className="text-2xl pt-10 font-bold text-gray-900 dark:text-slate-200">
          Available Courses
        </h1>
        <h1 className="text-lg text-gray-900 dark:text-slate-400">
          Find a course you are interested in
        </h1>
      </div>
      <ul
        role="list"
        className="flex flex-col grow gap-y-2 pt-5"
        // className="divide-y grow pt-5 divide-gray-100 dark:divide-slate-400"
      >
        {records.map((course) => (
          <Link
            to={`/course/${course._id}`}
            key={course._id}
            className="flex cursor-pointer group rounded-lg p-5 bg-gray-50 hover:bg-gray-200 justify-between dark:hover:bg-sky-900 dark:bg-slate-800"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full"
                src={"/course-pictures/" + course.image}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">
                  {course.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {course.semester}
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-slate-400">
                  Updated {new Date(course.lastUpdate).toLocaleString()}
                </p>
                {course.isOpenToEnroll ? (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                      Open
                    </p>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                      Closed
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <ChevronDoubleRightIcon className="h-6 w-6 dark:text-slate-200 dark:group-hover:text-sky-400"></ChevronDoubleRightIcon>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
