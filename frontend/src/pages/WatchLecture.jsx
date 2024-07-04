import { API_BASE_URL } from "../config";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import CommentSection from "../components/CommentSection";

const WatchLecture = () => {
  const params = useParams();
  const [lecture, setLecture] = useState({});

  useEffect(() => {
    async function increaseViewCount() {
      await fetch(`${API_BASE_URL}/${params.lectureId}/increaseViewCount`, {
        method: "PATCH",
      });
    }
    async function fetchLecture() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/course/${params.courseId}/lecture/${params.lectureId}`
        );
        const data = await response.json();
        setLecture(data);
      } catch (error) {
        console.error(error);
      }
    }
    increaseViewCount();
    fetchLecture();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg pt-10 text-gray-900 dark:text-slate-400">
            Lecture:
          </h1>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            {lecture.title}
          </h1>
        </div>
        <div className="flex items-end gap-2">
          <Link
            to={`/course/${params.courseId.toString()}/edit/${params.lectureId.toString()}`}
            className=""
          >
            <PencilSquareIcon className="size-8 dark:text-slate-200"></PencilSquareIcon>
          </Link>
        </div>
      </div>
      <div className="mt-10 grid grid-flow-row grid-cols-3 gap-5">
        <div className="col-span-2 bg-slate-100 aspect-video">Video</div>
        <div className="col-span-1 bg-slate-100">
          <CommentSection></CommentSection>
        </div>
      </div>
      <div className="mt-5 grid grid-flow-row grid-cols-2 gap-5">
        <div className="bg-slate-100 aspect-square">Document</div>
        <div className="bg-slate-100">Notes</div>
      </div>
    </div>
  );
};

export default WatchLecture;
