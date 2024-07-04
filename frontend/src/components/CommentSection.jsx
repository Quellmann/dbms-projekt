import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { formatDistanceToNow } from "date-fns";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user } = useAuth();

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, date: new Date() }]);
      setCommentText("");
    }
  };

  const renderComments = () => {
    return comments.map((comment, index) => (
      <div key={index} className="mx-2">
        <div>
          <span className="font-bold dark:text-slate-200">{user.username}</span>
          <span className="ml-4 text-sm font-thin dark:text-slate-400">
            {formatDistanceToNow(new Date(comment.date), {
              addSuffix: true,
            })}
          </span>
        </div>
        <p className="dark:text-slate-200">{comment.text}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={commentText}
            onChange={handleInputChange}
            className="w-full min-h-14 p-2 border-b rounded-t-lg dark:bg-slate-800"
            placeholder="Write a comment..."
            rows="1"
          ></textarea>
          <button
            type="submit"
            className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-gray-100 text-gray-900 hover:bg-gray-300 rounded"
          >
            <PaperAirplaneIcon className="size-6"></PaperAirplaneIcon>
          </button>
          <div className="flex divide-y flex-col gap-2">{renderComments()}</div>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
