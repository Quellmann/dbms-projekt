import {
  AcademicCapIcon,
  ArrowPathIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import VideoCard from "../components/VideoCard";
import { formatDistanceToNow } from "date-fns";

function CoursePage() {
  const [course, setCourse] = useState({});
  const [lectures, setLectures] = useState([]);
  const [mostRecentLecture, setMostRecentLecture] = useState();
  const params = useParams();

  useEffect(() => {
    async function getCourse() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/course/${params.courseId.toString()}`
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCourse();

    async function getLectures() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/course/${params.courseId.toString()}/lectures`
        );
        const data = await response.json();
        setLectures(data);
      } catch (error) {
        console.error(error);
      }
    }
    getLectures();
    setMostRecentLecture(lectures.at(0));
  }, [lectures.length]);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg pt-10 text-gray-900 dark:text-slate-400">
            Welcome to
          </h1>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            {course.name}
          </h1>
        </div>
        <div className="flex items-end gap-2">
          <Link to={`/edit/${params.courseId.toString()}`} className="">
            <PencilSquareIcon className="size-8 dark:text-slate-200"></PencilSquareIcon>
          </Link>
          <Link to={`/course/${params.courseId.toString()}/createLecture`}>
            <PlusCircleIcon className="size-8 dark:text-slate-200"></PlusCircleIcon>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <div className="text-lg font-bold dark:text-slate-200">
              Watch the latest Lecture
            </div>
            {mostRecentLecture ? (
              <VideoCard
                path={`/course/${params.courseId.toString()}/lecture/${
                  mostRecentLecture._id
                }
              `}
                data={mostRecentLecture}
              ></VideoCard>
            ) : (
              ""
            )}
          </div>
          <div>
            <h1 className="text-lg font-bold dark:text-slate-200">
              Course Information
            </h1>
            <div className="flex flex-col pt-2 gap-y-2">
              <div className="flex p-4 gap-x-4 bg-gray-50 dark:bg-slate-800 dark:text-slate-200 items-center rounded-lg">
                <AcademicCapIcon className="h-6 w-6" />
                <div className="">
                  Lectured by:{" "}
                  <span className="font-bold">
                    {course.lecturedBy?.username}
                  </span>
                </div>
              </div>
              <div className="flex p-4 gap-x-4 bg-gray-50 dark:bg-slate-800 dark:text-slate-200  items-center rounded-lg">
                <AtSymbolIcon className="h-6 w-6" />
                <div className="">
                  Contact:{" "}
                  <span className="font-bold">{course.lecturedBy?.email}</span>
                </div>
              </div>
              <div className="flex p-4 gap-x-4 bg-gray-50 dark:bg-slate-800 dark:text-slate-200  items-center rounded-lg">
                <CalendarDaysIcon className="h-6 w-6" />
                <div className="">
                  Lecturing days:{" "}
                  <span className="font-bold">
                    {course.lecturingDays?.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex p-4 gap-x-4 bg-gray-50 dark:bg-slate-800 dark:text-slate-200  items-center rounded-lg">
                <ArrowPathIcon className="h-6 w-6" />
                <div className="">
                  Last Updated:{" "}
                  <span className="font-bold">
                    {course.lastUpdate
                      ? formatDistanceToNow(new Date(course.lastUpdate), {
                          addSuffix: true,
                        })
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-lg font-bold dark:text-slate-200">
          All Lectures
        </div>
        <div className="grid grid-cols-4 gap-x-4 gap-y-10">
          {lectures.map((lecture) => (
            <VideoCard
              key={lecture._id}
              path={`/course/${params.courseId.toString()}/lecture/${
                lecture._id
              }
          `}
              data={lecture}
            ></VideoCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursePage;
