import React, { useState } from "react";
import { useAuth } from "../context/UserContext";

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
      <div key={index} className="border rounded-lg">
        <div className="font-bold">
          @Sebastian <span className="text-sm font-thin">2h ago</span>
        </div>
        <p>{comment.text}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div>{renderComments()}</div>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <textarea
          value={commentText}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Write a comment..."
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
