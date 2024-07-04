import { API_BASE_URL } from "../config";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/UserContext";
import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import CommentSection from "../components/CommentSection";
import ReactPlayer from "react-player";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const WatchLecture = () => {
  const { user } = useAuth();
  const params = useParams();
  const [lecture, setLecture] = useState({});
  const [notes, setNotes] = useState("");

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
        {["teacher", "admin"].includes(user.role) && (
          <div className="flex items-end">
            <Link
              to={`/course/${params.courseId.toString()}/edit/${params.lectureId.toString()}`}
              className=""
            >
              <PencilSquareIcon className="size-8 dark:text-slate-200"></PencilSquareIcon>
            </Link>
          </div>
        )}
      </div>
      <div className="mt-10 grid grid-flow-row grid-cols-3 gap-5">
        <div className="col-span-2 border aspect-video">
          <ReactPlayer
            width="100%"
            height="100%"
            controls="true"
            url="/uploads/videos/example.mp4"
          ></ReactPlayer>
        </div>
        <div className="col-span-1 border rounded-lg">
          <CommentSection></CommentSection>
        </div>
      </div>
      <div className="mt-5 grid grid-flow-row grid-cols-2 gap-5">
        <div className="border rounded-lg aspect-square">
          <iframe
            className="w-full h-full"
            src="/uploads/pdfs/example.pdf"
          ></iframe>
        </div>
        <div className="rounded-lg">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-full p-2 border rounded-lg bg-orange-100"
            placeholder="Write your notes here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default WatchLecture;
